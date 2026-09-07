// ==========================================
// 1. CONFIGURACIÓN DE FECHAS
// ==========================================
const FECHA_INICIO_RETO = new Date(2026, 6, 2); // 2 de Julio de 2026
const FECHA_CUMPLEANOS = new Date(2026, 7, 2); // 2 de Agosto de 2026

// DESHABILITACIÓN TEMPORAL DE LA LÍNEA DE CUMPLEAÑOS
/*
// ==========================================
// 3. LOGICA PRINCIPAL (AL CARGAR LA PAGINA)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    // Generar Línea de Tiempo
    const timelineContainer = document.querySelector(".timeline-container");
    const hoy = new Date();
    const diferenciaTiempo = hoy - FECHA_INICIO_RETO;
    const diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)) + 1;

    // Generar los 30 días automáticamente
    for (let i = 1; i <= 31; i++) {
        const item = document.createElement("div");
        const lado = (i % 2 !== 0) ? "left" : "right";
        item.classList.add("timeline-item", lado);

        const estaDesbloqueado = i <= diasTranscurridos;
        const datosDia = contenidoDias[i] || { titulo: `Día ${i.toString().padStart(2, '0')}`, texto: "El futuro aguarda una hermosa sorpresa." };

        if (estaDesbloqueado) {
            item.classList.add("unlocked");
            
            const iconoEstrella = datosDia.esEspecial ? "⭐" : "✦";
            const textoBoton = datosDia.esEspecial ? "👀" : "Abrir sorpresa";

            item.innerHTML = `
                <div class="star-node">${iconoEstrella}</div>
                <div class="card">
                    <span class="day-number">✨ Algo nuevo en el día ${i.toString().padStart(2, '0')} ✨</span>
                    <h3>${datosDia.titulo}</h3>
                    <p>${datosDia.pista.substring(0, 75)}...</p> <button class="btn-open" onclick="abrirSorpresa(${i})">${textoBoton}</button>
                </div>
            `;
            
            if (!datosDia.esEspecial) {
                item.querySelector(".day-number").innerText = `Día ${i.toString().padStart(2, '0')}`;
                item.querySelector("p").innerText = datosDia.pista; 
            }
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

    // Temporizador
    actualizarCountdown();
    setInterval(actualizarCountdown, 1000);

    // Configurar Cierre del Modal
    const modal = document.getElementById("surprise-modal");
    const btnCerrar = document.querySelector(".close-modal");
    if(btnCerrar) {
        btnCerrar.addEventListener("click", () => modal.style.display = "none");
    }
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});

// ==========================================
// 4. FUNCIONES AUXILIARES (MODAL Y COUNTDOWN)
// ==========================================
function abrirSorpresa(dia) {
    const modal = document.getElementById("surprise-modal");
    const modalDay = document.getElementById("modal-day-text");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    const datosDia = contenidoDias[dia] || { titulo: `Día ${dia.toString().padStart(2, '0')}`, texto: "El futuro aguarda una hermosa sorpresa." };

    modalDay.innerText = datosDia.esEspecial ? `🌟 Hito Especial - Día ${dia} 🌟` : `Día ${dia.toString().padStart(2, '0')}`;
    modalDay.innerText = `Día ${dia.toString().padStart(2, '0')}`;
    modalTitle.innerText = datosDia.titulo;
    modalText.innerHTML = datosDia.texto;
    modal.style.display = "flex";
}

function actualizarCountdown() {
    const ahora = new Date();
    const distancia = FECHA_CUMPLEANOS.getTime() - ahora.getTime();

    if (distancia < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = dias.toString().padStart(2, "0");
    document.getElementById("hours").innerText = horas.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutos.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = segundos.toString().padStart(2, "0");
}

actualizarCountdown();
setInterval(actualizarCountdown, 1000);

// ==========================================
// 5. MODAL FINAL DE CUMPLEAÑOS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const fechaCumple = new Date(FECHA_CUMPLEANOS);
    fechaCumple.setHours(0, 0, 0, 0);

    const finalGiftSection = document.querySelector(".final-gift-section");

    if (finalGiftSection) {
        if (hoy.getTime() >= fechaCumple.getTime()) {
            finalGiftSection.classList.remove("locked");
            finalGiftSection.classList.add("unlocked");
            
            finalGiftSection.innerHTML = `
                <button id="btn-final-gift" onclick="redireccionarPaginaCumpleaños()">
                    🎁
                </button>
            `;
        } else {
            finalGiftSection.classList.remove("unlocked");
            finalGiftSection.classList.add("locked");
            
            finalGiftSection.innerHTML = `
                <button id="btn-final-gift" class="btn-disabled" disabled>
                    🔒
                </button>
            `;
        }
    }
});

// Función de redirección para abrir la página del cumpleaños
function redireccionarPaginaCumpleaños() {
    window.location.href = "birthday.html"; 
}
*/

// ==========================================
// 6. MODAL DE ESCRITOS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const finalGiftSection = document.querySelector(".final-gift-section");

    finalGiftSection.classList.remove("locked");
    finalGiftSection.classList.add("unlocked");

    finalGiftSection.innerHTML = `
        <button id="btn-final-gift" onclick="redireccionarPaginaEscritos()">
            📖
        </button>
    `;
});

// Función de redirección para abrir la página del cumpleaños
function redireccionarPaginaEscritos() {
    window.location.href = "poemas.html"; 
}