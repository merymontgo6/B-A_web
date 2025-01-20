document.addEventListener("DOMContentLoaded", function () {
  // Mostrar la primera imagen al cargar la página
  showImage(currentImageIndex);

  //PREGUNTAS FREQUENTES

  document.addEventListener("DOMContentLoaded", function () {
    const preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach((pregunta) => {
      const respuesta = pregunta.querySelector(".respuesta");
      // Asegurar que cada respuesta comience oculta

      respuesta.style.display = "none";

      pregunta.addEventListener("click", function () {
        // Alternar la visibilidad de la respuesta
        respuesta.style.display =
          respuesta.style.display === "block" ? "none" : "block";
      });
    });
  });

  // Manejar el hover en las preguntas para mostrar/ocultar respuestas
  document.querySelectorAll(".pregunta").forEach((pregunta) => {
    pregunta.addEventListener("onclick", function () {
      const respuesta = this.querySelector(".respuesta");
      respuesta.style.display =
        respuesta.style.display === "block" ? "none" : "block";
    });
  });

  // Corregir la selección de elementos para la corrección de texto
  document.querySelectorAll(".text-original, .text-new").forEach((elem) => {
    elem.classList.add("counter-rotate");
  });
});

function showImage(index) {
  currentImageIndex = index;
  const imageElement = document.getElementById("imagen-destacada");
  const descriptionElement = document.getElementById("descripcion-imagen");
  if (images[index]) {
    imageElement.src = images[index].src;
    descriptionElement.textContent = images[index].description;
  }
}

function prevImage() {
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}
//Tarjetas
//Animacion de tarjetas
function toggleText(cardElement) {
  cardElement.classList.toggle("flip-onclick-backward");
  setTimeout(() => {
    cardElement
      .querySelectorAll(".text-original, .text-new")
      .forEach((elem) => {
        elem.style.display = elem.style.display === "none" ? "" : "none";
      });
  }, 20); // Ajustar este retraso según la necesidad.
}

//Tarjetas Mentores
// Asume que esta función se llama para inicializar los event listeners en el elemento deseado.
function setupTextToggle(cardElement) {
  cardElement.addEventListener("mouseover", () => {
    const textOriginal = cardElement.querySelector(".text-original");
    const textNew = cardElement.querySelector(".new-text-new");
    textOriginal.style.display = "none";
    textNew.style.display = "block";
    textNew.style.color = "black";
  });

  cardElement.addEventListener("mouseout", () => {
    const textOriginal = cardElement.querySelector(".text-original");
    const textNew = cardElement.querySelector(".new-text-new");
    textOriginal.style.display = "block";
    textNew.style.display = "none";
  });
}

// Aplicar setupTextToggle a todas las cartas de mentores
document.querySelectorAll(".card-mentores").forEach(setupTextToggle);

//IMAGENES
let currentImageIndex = 0;

const images = [
  {
    src: "img/img_estudio.webp",
    description: "Estudio de grabación / Podcasts",
  },
  { src: "img/img_pinball.webp", description: "Zona de Pinball" },
  {
    src: "img/img_claqueta.webp",
    description: "Trabajo de creación de contenidos",
  },
  { src: "img/img_brazo.webp", description: "Estudio" },
  { src: "img/img_cocina.webp", description: "Cocina" },
  { src: "img/img_cocina2.webp", description: "Cocina y patio" },
];

function showImage(index) {
  currentImageIndex = index;
  const imageElement = document.getElementById("imagen-destacada");
  const descriptionElement = document.getElementById("descripcion-imagen");
  imageElement.src = images[index].src;
  descriptionElement.textContent = images[index].description;
}

function prevImage() {
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex =
    currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  showImage(currentImageIndex);
}

//Animacion rotativa del texto
document.addEventListener("DOMContentLoaded", function () {
  let texts = [
    "IA",
    "Creatividad",
    "Big Data",
    "Marketing",
    "IoT",
    "Ventas",
    "Desarrollo",
    "Electrónica",
  ];
  let currentIndex = 0;
  const rotatingText = document.getElementById("rotating-text");

  function createSpans(text) {
    rotatingText.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      rotatingText.appendChild(span);
    });
  }

  function animateText() {
    const spans = rotatingText.querySelectorAll("span");
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, index * 70); // Delay each letter
    });

    setTimeout(() => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("out");
        }, index * 100); // Delay each letter
      });
    }, 1500); // Wait before starting the fade out
  }

  function rotateText() {
    createSpans(texts[currentIndex]);
    animateText();
    currentIndex = (currentIndex + 1) % texts.length;
  }

  rotateText();
  setInterval(rotateText, 2800); // Change text every 4 seconds
});
// Mostrar la primera imagen al cargar la p谩gina
document.addEventListener("DOMContentLoaded", function () {
  const preguntas = document.querySelectorAll(".pregunta");

  preguntas.forEach((pregunta) => {
    pregunta.addEventListener("click", function () {
      const respuesta = this.querySelector(".respuesta");
      if (respuesta.style.display === "block") {
        respuesta.style.display = "none";
      } else {
        respuesta.style.display = "block";
      }
    });
  });
});
