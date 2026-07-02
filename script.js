// ==========================================
// 1. CONFIGURACIÓN DE FECHAS
// ==========================================
const FECHA_INICIO_RETO = new Date(2026, 6, 2); // 2 de Julio de 2026
const FECHA_CUMPLEANOS = new Date(2026, 7, 2); // 2 de Agosto de 2026

// Escritos de tus días
const contenidoDias = {
    1: {
        titulo: "El inicio del viaje",
        pista: "¿Dónde comenzó todo?",
        texto: "Aquí va tu primer escrito romántico, un recuerdo o una pista especial..."
    },
    2: {
        titulo: "Nuestra primera cita",
        pista: "",
        texto: "Todavía me acuerdo de los nervios que tenía ese día y de lo hermosa que te veías..."
    },
    3: { 
        titulo: "Tu sonrisa",
        pista: "",
        texto: "Una de las 10 razones por las que me enamoré perdidamente de ti..."
    },
    4: {
        titulo: "",
        pista: "",
        texto: ""
    },
    5: {
        titulo: "",
        pista: "",
        texto: ""
    },
    6: {
        titulo: "",
        pista: "",
        texto: ""
    },
    7: {
        titulo: "",
        pista: "",
        texto: ""
    },
    8: {
        titulo: "",
        pista: "",
        texto: ""
    },
    9: {
        titulo: "",
        pista: "",
        texto: ""
    },
    10: {
        titulo: "",
        pista: "",
        texto: ""
    },
    11: {
        titulo: "",
        pista: "",
        texto: ""
    },
    12: {
        titulo: "",
        pista: "",
        texto: ""
    },
    13: {
        titulo: "",
        pista: "",
        texto: ""
    },
    14: {
        titulo: "",
        pista: "",
        texto: ""
    },
    15: {
        titulo: "",
        pista: "",
        texto: ""
    },
    16: {
        titulo: "",
        pista: "",
        texto: ""
    },
    17: {
        titulo: "",
        pista: "",
        texto: ""
    },
    18: {
        titulo: "",
        pista: "",
        texto: ""
    },
    19: {
        titulo: "",
        pista: "",
        texto: ""
    },
    20: {
        titulo: "",
        pista: "",
        texto: ""
    },
    21: {
        titulo: "",
        pista: "",
        texto: ""
    },
    22: {
        titulo: "",
        pista: "",
        texto: ""
    },
    23: {
        titulo: "",
        pista: "",
        texto: ""
    },
    24: {
        titulo: "",
        pista: "",
        texto: ""
    },
    25: {
        titulo: "",
        pista: "",
        texto: ""
    },
    26: {
        titulo: "",
        pista: "",
        texto: ""
    },
    27: {
        titulo: "",
        pista: "",
        texto: ""
    },
    28: {
        titulo: "",
        pista: "",
        texto: ""
    },
    29: {
        titulo: "",
        pista: "",
        texto: ""
    },
    30: {
        titulo: "",
        pista: "",
        texto: ""
    },
};

// ==========================================
// 2. CONSTELACIONES DE FONDO (CANVAS)
// ==========================================
const canvas = document.getElementById("constellationCanvas");
const ctx = canvas.getContext("2d");
let starsArray = [];
const NUMBER_OF_STARS = 85; 
const CONNECTION_DISTANCE = 120; 

function resizeCanvas() {
    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.fadeSpeed = (Math.random() - 0.5) * 0.01;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        this.opacity += this.fadeSpeed;
        if (this.opacity < 0.2 || this.opacity > 0.9) this.fadeSpeed = -this.fadeSpeed;
    }
    draw() {
        ctx.fillStyle = `rgba(243, 229, 171, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initStars() {
    starsArray = [];
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
        starsArray.push(new Star());
    }
}

function connectStars() {
    for (let a = 0; a < starsArray.length; a++) {
        for (let b = a; b < starsArray.length; b++) {
            let dx = starsArray[a].x - starsArray[b].x;
            let dy = starsArray[a].y - starsArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DISTANCE) {
                let alpha = (1 - (distance / CONNECTION_DISTANCE)) * 0.15;
                ctx.strokeStyle = `rgba(243, 229, 171, ${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(starsArray[a].x, starsArray[a].y);
                ctx.lineTo(starsArray[b].x, starsArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].update();
        starsArray[i].draw();
    }
    connectStars();
    requestAnimationFrame(animateBackground);
}

// ==========================================
// 3. LOGICA PRINCIPAL (AL CARGAR LA PAGINA)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar Fondo
    resizeCanvas();
    initStars();
    animateBackground();

    // Generar Línea de Tiempo
    const timelineContainer = document.querySelector(".timeline-container");
    const hoy = new Date();
    const diferenciaTiempo = hoy - FECHA_INICIO_RETO;
    const diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)) + 1;

    // Generar los 30 días automáticamente
    for (let i = 1; i <= 30; i++) {
        const item = document.createElement("div");
        const lado = (i % 2 !== 0) ? "left" : "right";
        item.classList.add("timeline-item", lado);

        const estaDesbloqueado = i <= diasTranscurridos;
        const datosDia = contenidoDias[i] || { titulo: `Día ${i.toString().padStart(2, '0')}`, texto: "El futuro aguarda una hermosa sorpresa." };

        if (estaDesbloqueado) {
            item.classList.add("unlocked");
            item.innerHTML = `
                <div class="star-node">✦</div>
                <div class="card">
                    <span class="day-number">Día ${i.toString().padStart(2, '0')}</span>
                    <h3>${datosDia.titulo}</h3>
                    <p>${datosDia.pista}</p>
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

    modalDay.innerText = `Día ${dia.toString().padStart(2, '0')}`;
    modalTitle.innerText = datosDia.titulo;
    modalText.innerText = datosDia.texto;
    modal.style.display = "flex";
}

function actualizarCountdown() {
    const ahora = new Date().getTime();
    const distancia = FECHA_CUMPLEANOS.getTime() - ahora;

    if (distancia < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    document.getElementById("days").innerText = Math.floor(distancia / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById("hours").innerText = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById("minutes").innerText = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById("seconds").innerText = Math.floor((distancia % (1000 * 60)) / 1000).toString().padStart(2, '0');
}