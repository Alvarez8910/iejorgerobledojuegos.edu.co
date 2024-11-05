function mostrarTema(temaId) {
    const temas = document.querySelectorAll('.tema');
    temas.forEach(tema => {
        tema.style.display = 'none';
    });
    const temaSeleccionado = document.getElementById(temaId);
    temaSeleccionado.style.display = 'block';
}

let puntaje = 0;
let respuestasContestadas = 0;
const totalPreguntas = 10;

function actualizarPuntaje() {
    document.getElementById('puntaje').textContent = puntaje;
}

function verificarRespuesta(tema, pregunta, respuestaCorrecta) {
    const respuestaUsuario = document.getElementById(`respuesta${tema}-${pregunta}`).value.trim();
    const feedback = document.getElementById(`feedback${tema}-${pregunta}`);

    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        feedback.textContent = '¡Correcto!';
        feedback.style.color = 'green';
        puntaje += 10;
    } else {
        feedback.textContent = 'Incorrecto, intenta de nuevo.';
        feedback.style.color = 'red';
    }
    feedback.style.display = 'inline';
    respuestasContestadas++;

    actualizarPuntaje();
    verificarTemaCompleto(tema);
}

function verificarTemaCompleto(tema) {
    if (respuestasContestadas === totalPreguntas) {
        document.getElementById(`siguiente${tema}`).style.display = 'inline-block';
    }
}

function irATema(siguienteTema) {
    respuestasContestadas = 0;
    mostrarTema(`tema${siguienteTema}`);
}
