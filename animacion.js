const mask = [
"                        @@@@@@@@@@@@@@@@@@@@@                      ",
"                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  ",
"                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                ",
"             @@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@             ",
"          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@          ",
"        @@@@@@@@@@@@@@          @@@@@@@@@@@@@        @@@@@@@        ",
"       @@@@@@@@@@@@@@@   @@@@    @@@@@@@@@@@@@        @@@@@@@@      ",
"     @@@@@@@@@@@@@@@@@   @@@@    @@@@@@@@@@@@@          @@@@@@@     ",
"    @@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@          @@@@@@    ",
"   @@@@@@@@@@@@@@@@@@@   @@@@    @@@@@@@@@@@@@@@            @@@@@  ",
"  @@@@@@@@@@@@@@@@@@@@   @@@@    @@@@@@@@@@@@@@              @@@@@  ",
" @@@@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@               @@@@ ",
" @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@ ",
" @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        @@@@ ",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                           @@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                @@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                     @@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@@@              @@@                     @@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@@             @@@@@                    @@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@            @@@ @@@                  @@@@@",
" @@@@@@@@@@@@@@@@@@@@@@@            @@@   @@@                  @@@@@ ",
"   @@@@@@@@@@@@@@@@@@@@           @@@@@@@@@@@                @@@@@ ",
"    @@@@@@@@@@@@@@@@@@@@         @@@       @@@             @@@@@@  ",
"     @@@@@@@@@@@@@@@@@@         @@@         @@@           @@@@@@   ",
"      @@@@@@@@@@@@@@@@@@                              @@@@@@@@     ",
"        @@@@@@@@@@@@@@@@@                           @@@@@@@@       ",
"          @@@@@@@@@@@@@@@@@                       @@@@@@@          ",
"            @@@@@@@@@@@@@@@@                  @@@@@@@@@            ",
"               @@@@@@@@@@@@@@@             @@@@@@@@@@@             ",
"                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  ",
"                        @@@@@@@@@@@@@@@@@@@@@                      "
];

function getRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateSquare() {
    const square = document.getElementById('square');
    square.innerHTML = ''; // Vaciar el contenido actual

    // Generar las líneas de la cuadrícula actual hasta la línea revelada
    for (let lineIndex = 0; lineIndex < mask.length; lineIndex++) {
        let newLine = '';
        for (let charIndex = 0; charIndex < mask[lineIndex].length; charIndex++) {
            const char = mask[lineIndex][charIndex];
            if (char === ' ' || (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || char === '|' || char === '_' || char === '\\' || char === '/' || char === ')'|| char === '.' || char === '`' || char === '(' ) {
                newLine += char;
            } else {
                newLine += getRandomChar();
            }
        }
        square.innerHTML += newLine + '\n';
        if (lineIndex >= Math.floor(revealIndex / mask[0].length)) {
            break; // Detener la generación en la línea actual revelada
        }
    }
}

let revealIndex = 0;

function revealNextChar() {
    if (revealIndex < mask.length * mask[0].length) {
        revealIndex++;
    }
}

// Función para generar una espiral de caracteres aleatorios
function generateSpiral() {
    const spiral = document.getElementById('spiral');
    const width = spiral.offsetWidth;
    const height = spiral.offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;
    let angle = 0;
    const angleIncrement = 0.1;

    spiral.innerHTML = '';

    while (angle < 10 * Math.PI) {
        const x = centerX + radius * Math.cos(angle) * angle / 50;
        const y = centerY + radius * Math.sin(angle) * angle / 50;
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.textContent = getRandomChar();
        spiral.appendChild(span);
        angle += angleIncrement;
    }
}

// Intervalo para generar caracteres aleatorios
setInterval(generateSquare, 90); // Ajusta la velocidad de generación de caracteres aquí

// Intervalo para revelar las líneas de la máscara
setInterval(revealNextChar, .10); // Ajusta la velocidad de aparición de las líneas aquí

// Intervalo para generar la espiral de fondo
setInterval(generateSpiral, 500); // Ajusta la velocidad de actualización de la espiral aquí

// Detectar el evento de scroll
window.addEventListener('scroll', () => {
    const square = document.getElementById('square');
    const contentWrapper = document.getElementById('main-content-wrapper');

    // Cuando el usuario hace scroll, mueve la animación hacia arriba
    if (window.scrollY > 0) {
        square.style.top = `-${window.scrollY}px`;  // Mueve la animación hacia arriba con el scroll
        contentWrapper.style.paddingTop = '0';  // El contenido se desplaza hacia arriba
    } else {
        // Cuando el scroll vuelve a ser 0, la animación se coloca en su posición inicial
        square.style.top = '0';
        contentWrapper.style.paddingTop = '100vh';  // Vuelve a poner el contenido debajo de la animación
    }
});
