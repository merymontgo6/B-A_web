const mask = [
    "                                     %@*@@@%                                     ",
    "                          @@@@@@*@@@@@@###@@@@@@@@@@@@@                          ",
    "                     @@@@@@@@@@@@@@@@@@@@@@*#@@@@@@@@@@*@@@@                     ",
    "                 #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@*@@@*@               ",
    "             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@@*@@              ",
    "           @@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@           @@@@@@@@           ",
    "         *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            @@@@*@@         ",
    "       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             &@@@@*@       ",
    "     @@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@               @@@@@@      ",
    "    #@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                @@&*@@    ",
    "   @@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                 @@@*@@   ",
    "  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   &@@@@@  ",
    "  @@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     @@%@@  ",
    " @@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       @@@@@ ",
    " @@@@@@  ___ ___ _____ ___     _   _  _ ___      _ _____ ___  __  __ ___   &@&@@ ",
    " @@@@@  | _ )_ _|_   _/ __|   /_\\ | \\| |   \\    /_\\_   _/ _ \\|  \\/  / __|   @@@@ ",
    " @*@@@  | _ \\| |  | | \\__ \\  / _ \\| .` | |) |  / _ \\| || (_) | |\\/| \\__ \\   @@*@ ",
    " @@@@@  |___/___| |_| |___/ /_/ \\_\\_|\\_|___/  /_/ \\_\\_| \\___/|_|  |_|___/   @@@@ ",
    " @@%@@@                                                                    @@#@@ ",
    " @@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                             @@@@@ ",
    "  @@#@@@@@@@@@@@@@@@@@@@@@@@@                                             @@#@@  ",
    "  @@@@@@@@@@@@@@@@@@@@@@@@@%                                             @@@@@,  ",
    "   @@@@@@@@@@@@@@@@@@@@@@@@                                             @@@@@#   ",
    "    @@@@@@@@@@@@@@@@@@@@@@@                                            @@@@@@    ",
    "      @@@@@@@@@@@@@@@@@@@@@                                          @@@**@@     ",
    "       *@@@@@@@@@@@@@@@@@@@@                                       @@@@@@@       ",
    "         @@@@@@@@@@@@@@@@@@@&                                    @@@@@*@         ",
    "            @@@@@@@@@@@@@@@@@@                                @@@@@@@            ",
    "             @@@*@%@@@@@@@@@@@@@                          &@@@%@*@@              ",
    "                 @@@@*@@@@@@@@@@@@@@                ,@@@@@@@@@@@                 ",
    "                     #*@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                     ",
    "                          ,**@@@*@@@@@*@@@@@@@@@@@@@@@                           ",
    "                                     %@*@@@%                                     "
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
            if (char === ' ' || (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || char === '|' || char === '_' || char === '\\' || char === '/' || char === ')' || char === '.' || char === '`' || char === '(') {
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

// Función para mostrar el navbar cuando la animación del logo esté completa
function checkRevealComplete() {
    const totalChars = mask.length * mask[0].length;
    if (revealIndex >= totalChars * 0.1) { // Mostrar el navbar cuando el logo esté al 10% revelado
        const nav = document.querySelector('nav');
        nav.classList.add('show-content');
        // Llamar a handleNavbarScroll inmediatamente para posicionar el navbar correctamente
        handleNavbarScroll();
    }
}

// Función para manejar el scroll del navbar
function handleNavbarScroll() {
    const nav = document.querySelector('nav');
    const square = document.getElementById('square-container');
    const squareBottom = square.getBoundingClientRect().bottom;

    if (squareBottom <= 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

// Añadir evento de scroll
window.addEventListener('scroll', handleNavbarScroll);

// Llamar a handleNavbarScroll una vez al inicio para posicionar correctamente el navbar
window.addEventListener('load', handleNavbarScroll);

// Intervalo para generar caracteres aleatorios
setInterval(generateSquare, 90); // Ajusta la velocidad de generación de caracteres aquí

// Intervalo para revelar las líneas de la máscara
setInterval(() => {
    revealNextChar();
    checkRevealComplete();
}, 0.10); // Ajusta la velocidad de aparición de las líneas aquí

// Intervalo para generar la espiral de fondo
setInterval(generateSpiral, 500); // Ajusta la velocidad de actualización de la espiral aquí

// Detectar el evento de scroll
window.addEventListener('scroll', () => {
    const square = document.getElementById('square');
    const contentWrapper = document.getElementById('main-content-wrapper');

    // Cuando el usuario hace scroll, mueve la animación hacia arriba
    if (window.scrollY > 0) {
        square.style.top = `-${window.scrollY}px`; // Mueve la animación hacia arriba con el scroll
        contentWrapper.style.paddingTop = '0'; // El contenido se desplaza hacia arriba
    } else {
        // Cuando el scroll vuelve a ser 0, la animación se coloca en su posición inicial
        square.style.top = '0';
        contentWrapper.style.paddingTop = '100vh'; // Vuelve a poner el contenido debajo de la animación
    }
});

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
