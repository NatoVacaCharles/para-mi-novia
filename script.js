// CONFIGURACIÓN: CAMBIA ESTAS FECHAS
const FECHA_INICIO_RETO = new Date(2026, 6, 2); // 2 de Julio del 2026

const FECHA_CUMPLEANOS = new Date(2026, 7, 2); // 2 de Agosto de 2026


// DATOS DE LOS 30 DÍAS
const contenidoDias = {
    1: { titulo: "El inicio del viaje", texto: "Aquí va tu primer escrito romántico, un recuerdo o una pista especial..." },
    2: { titulo: "Nuestra primera cita", texto: "Todavía me acuerdo de los nervios que tenía ese día y de lo hermosa que te veías..." },
    3: { titulo: "Tu sonrisa", texto: "Una de las 10 razones por las que me enamoré perdidamente de ti..." },
};

// GENERACIÓN DINÁMICA DE LA RUTA (30 DÍAS)
document.addEventListener("DOMContentLoaded", () => {
    const timelineContainer = document.querySelector(".timeline-container");
    
    // Calcular cuántos días han pasado desde la fecha de inicio
    const hoy = new Date();
    const diferenciaTiempo = hoy - FECHA_INICIO_RETO;
    const diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)) + 1;

    // Limpiamos los días de prueba que pusimos en el HTML (dejando solo la línea central)
    const itemsPrueba = timelineContainer.querySelectorAll(".timeline-item");
    itemsPrueba.forEach(item => item.remove());

    // Bucle para generar los 30 días
    for (let i = 1; i <= 30; i++) {
        const item = document.createElement("div");
        
        // Alternar izquierda y derecha
        const lado = (i % 2 !== 0) ? "left" : "right";
        item.classList.add("timeline-item", lado);
        item.setAttribute("data-day", i);

        // Verificar si el día está desbloqueado
        // Nota: Si quieres probar el diseño de todos desbloqueados, cambia 'i <= diasTranscurridos' por 'true'
        const estaDesbloqueado = i <= diasTranscurridos;

        // Obtener datos personalizados o usar unos por defecto si aún no los escribes
        const datosDia = contenidoDias[i] || { titulo: `Día ${i.toString().padStart(2, '0')}`, texto: "El futuro aguarda una hermosa sorpresa." };

        if (estaDesbloqueado) {
            item.classList.add("unlocked");
            item.innerHTML = `
                <div class="star-node">✦</div>
                <div class="card">
                    <span class="day-number">Día ${i.toString().padStart(2, '0')}</span>
                    <h3>${datosDia.titulo}</h3>
                    <p>${datosDia.texto}</p>
                    <button class="btn-open" onclick="abrirSorpresa(${i})">Abrir sorpresa</button>
                </div>
            `;
        } else {
            item.classList.add("locked");
            item.innerHTML = `
                <div class="star-node">✦</div>
                <div class="card">
                    <div class="lock-icon">🔒</div>
                    <span class="day-number">Día ${i.toString().padStart(2, '0')}</span>
                    <h3>???</h3>
                    <p>Este recuerdo aún está oculto en las estrellas.</p>
                </div>
            `;
        }

        timelineContainer.appendChild(item);
    }

    // Iniciar el temporizador
    actualizarCountdown();
    setInterval(actualizarCountdown, 1000);
});

// TEMPORIZADOR
function actualizarCountdown() {
    const ahora = new Date().getTime();
    const distancia = FECHA_CUMPLEANOS.getTime() - ahora;

    // Si ya llegó la fecha del cumpleaños
    if (distancia < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.querySelector(".countdown-subtitle").innerText = "¡FELIZ CUMPLEANOS! ❤️";
        return;
    }

    // Cálculos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar resultados en el HTML formateados con dos dígitos
    document.getElementById("days").innerText = dias.toString().padStart(2, '0');
    document.getElementById("hours").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = segundos.toString().padStart(2, '0');
}

// ==========================================
// CONTROL DEL MODAL (VENTANA EMERGENTE)
// ==========================================
function abrirSorpresa(dia) {
    const modal = document.getElementById("surprise-modal");
    const modalDay = document.getElementById("modal-day-text");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    // Obtener los datos del día clicado
    const datosDia = contenidoDias[dia] || { 
        titulo: `Día ${dia.toString().padStart(2, '0')}`, 
        texto: "¡Ups! Olvidaste rellenar el escrito de este día en el objeto 'contenidoDias'." 
    };

    // Inyectar el contenido en el modal
    modalDay.innerText = `Día ${dia.toString().padStart(2, '0')}`;
    modalTitle.innerText = datosDia.titulo;
    modalText.innerText = datosDia.texto;

    // Mostrar el modal usando flexbox para centrarlo
    modal.style.display = "flex";
}

// Lógica para cerrar el modal al hacer clic en la (X) o fuera de la tarjeta
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("surprise-modal");
    const btnCerrar = document.querySelector(".close-modal");

    // Cerrar desde la X
    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar si hace clic fuera del recuadro de la tarjeta (en el fondo difuminado)
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});