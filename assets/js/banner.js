if(document.querySelector(".banner__carousel")) {
let carouselIndex = 0
let bannerImage = document.querySelectorAll('.banner__imagen')
let prevImage = document.querySelector('.banner__boton--prev')
let nextImage = document.querySelector('.banner__boton--next')
let title = document.querySelector('.banner__title')
const coloresOriginal = [
    '#c806a1', '#77a937', '#6f9fc9', '#ff5733', '#33ff57', '#3357ff', '#ff33a6', '#a633ff', '#33fff6', '#f6ff33',
    '#ffb833', '#33ffb8', '#b833ff', '#ff3380', '#80ff33', '#3380ff', '#ff8033', '#33ff80', '#8033ff', '#ff3380'
];
let coloresDisponibles = [...coloresOriginal];

function mostrarImagen(index) {
    if (coloresDisponibles.length === 0) {
        coloresDisponibles = [...coloresOriginal];
    }
    const colorIndex = Math.floor(Math.random() * coloresDisponibles.length);
    const colorAleatorio = coloresDisponibles.splice(colorIndex, 1)[0];
    bannerImage.forEach((banner, i) => {
        banner.classList.toggle('banner__imagen--active', i === index)
        title.style.color = i === index ? colorAleatorio : '#fff'
    });
}

prevImage.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + bannerImage.length) % bannerImage.length
    mostrarImagen(carouselIndex)
})

nextImage.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % bannerImage.length
    mostrarImagen(carouselIndex)
})


setInterval(() => {
    carouselIndex = (carouselIndex + 1) % bannerImage.length
    mostrarImagen(carouselIndex)
}, 5000);
}