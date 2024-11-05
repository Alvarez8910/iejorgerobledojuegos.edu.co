// Función para animar los elementos en el fondo
function animateBackgroundShapes() {
    const shapes = document.querySelectorAll('.background-shapes > div');

    shapes.forEach((shape) => {
        shape.style.transition = "transform 5s ease-in-out";
        setInterval(() => {
            const xOffset = Math.random() * 50 - 25; // Movimiento aleatorio en X
            const yOffset = Math.random() * 50 - 25; // Movimiento aleatorio en Y
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }, 5000);
    });
}

// Inicializar animaciones al cargar la página
document.addEventListener("DOMContentLoaded", animateBackgroundShapes);
