let puntuacion = 0;

// Actualiza la puntuación en pantalla
function actualizarPuntuacion() {
    document.getElementById('puntuacion').textContent = `Puntuación: ${puntuacion}`;
}

// Verifica si la respuesta es correcta o incorrecta
function verificarRespuesta(tema, pregunta, respuestaCorrecta) {
    const input = document.getElementById(`respuesta${tema}-${pregunta}`);
    const feedback = document.getElementById(`feedback${tema}-${pregunta}`);
    const respuestaUsuario = input.value.trim().toLowerCase();
    const respuestaFormateada = respuestaCorrecta.toLowerCase();

    if (respuestaUsuario === respuestaFormateada) {
        feedback.textContent = "¡Correcto!";
        feedback.className = "correcto";
        puntuacion += 1;
    } else {
        feedback.textContent = "Incorrecto. Intenta de nuevo.";
        feedback.className = "incorrecto";
    }

    actualizarPuntuacion();
}

// Función para mostrar un tema específico
function irATema(temaId) {
    const temas = document.querySelectorAll(".tema");
    temas.forEach((tema, index) => {
        tema.style.display = (index + 1 === temaId) ? "block" : "none";
    });
}

// Mostrar el primer tema al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    irATema(1);
    actualizarPuntuacion();
});
