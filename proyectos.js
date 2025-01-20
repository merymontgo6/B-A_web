let currentImageIndex = 0;

const images = [
  { src: "img/fatboyHarley.png", description: "Estudio de grabación / Podcasts" },
  { src: "img/glorificador.png", description: "Zona de Pinball" },
  { src: "img/glorificador.png", description: "Trabajo de creación de contenidos" },
  { src: "img/glorificador.png", description: "Moto" },
  { src: "img/fotboyHarley.png", description: "Casa" },
  { src: "img/img_cocina2.webp", description: "Cocina y patio" },
];

function showImage(index) {
  currentImageIndex = index;
  const imageElement = document.getElementById("imagen-destacada");
  const descriptionElement = document.getElementById("descripcion-imagen");

  if (imageElement && descriptionElement) {
    imageElement.src = images[index].src;
    descriptionElement.textContent = images[index].description;
  } else {
    console.error("No se encontraron los elementos de imagen destacada o descripción.");
  }
}

function prevImage() {
  currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  showImage(currentImageIndex);
}

// Inicializar con la primera imagen
showImage(0);
