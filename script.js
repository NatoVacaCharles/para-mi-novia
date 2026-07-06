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
        texto: `
        Si el destino fue quien quizo que estemos juntos pues
        definitivamente fue el día que puse, sin saber que te
        encontraría, un pie en esa oficiona. Si algo tengo
        guardado en mi memoria es la forma en que tu risa se
        entrometía en la voz de la gente en la llamada.
        `
    },
    2: {
        titulo: "Una primera mirada",
        pista: "¿Recuerdas cuando fue la primera vez que nos miramos a los ojos?",
        texto: `
        Recuerdo un día que te acercaste directamente a Alicia,
        simplemente voltee discretamente para saber quien se
        acercaba y ahí te ví. Los ademanes que realizabas y la
        sonrisa que siempre tuviste se esbozaban en tu ser.
        Caí, sin todavía saber, en la mirada y actitud de aquella mujer.
        `
    },
    3: {
        titulo: "¿Primer acercamiento?",
        pista: "Apenas y un hola...",
        texto: `
        No negaré que cuando me mandaron a ese cuarto no te
        dirigía ni la palabra y simplemente era porque siempre
        he sido callado en esos ambientes. Sin embargo, he de admitir
        que en mi atención si calabas, puesto que por tu forma
        de ser siempre sabía si es que ahí te encontrabas.
        `
    },
    4: {
        titulo: "Caminando juntos",
        pista: "¿De Goyeneche al cruce? 😅",
        texto: `
        Sinceramente por mi cabeza nunca pasó caminar tanto conversando.
        Yo pensé que simplemente llegaríamos unas cuadras más arriba y
        tomarías tu carro para irte a tu casa. Sin embargo, desde esa
        caminata larga y conversación amena, sentí que algo había cambiado.
        No sé si lo sentiste, pero, inicialmente sentí que si nos ibamos a
        llevar bien, pero, no pensé que podríamos llegar tan lejos en tan
        poco tiempo.
        `
    },
    5: {
        titulo: "Caminos por conectar",
        pista: "Tener la misma ruta fue determinante",
        texto: `
        Rápidamente fue una costumbre innata, como si así debía de ser y
        así se quedó. Paso a paso, palabra por palabra, risa por risa.
        Terminar esa jornada laboral se volvió mi parte esperada del día,
        como si solo esperara que empezara a trabjar para añorar la salida,
        ya que en esa salida una gran compañía me esperaba.
        `
    },
    6: {
        titulo: "Un rayo de conexión",
        pista: "Entre el miedo y los nervios",
        texto: `
        No sé como hubiera surgido un primer acercamiento nuestro si no
        hubiera sido por ese estruendo nocturno. La excusa perfecta había
        encontrado para sentir por primera vez cómo era tenerte entre mis
        brazos. Sinceramente, desde ese mismo instante ese deseo de querer
        estar más contigo fue creciendo gradualmente.
        `
    },
    7: {
        titulo: "Lluvia constante",
        pista: "Como dos gotas se juntan",
        texto: `
        Bien dijo Marco Aurelio Denegri que al buscar una pareja es importante
        que sepa conversar. Cada salida que siempre tuvimos mientras caminabamos
        la comodidad era evidente, la tranquilidad y solvencia nuestra
        mostraban la conexión latente. Algo importante que considero es que
        en la estación del año correspondiente siempre fue de mi preferencia 
        y, dándome cuenta, la mujer que conocí también se convirtió en la persona
        de mi preferencia.
        `
    },
    8: {
        titulo: "En el campo",
        pista: "Cabalgando entre la tarde",
        texto: `
        Si algo trajiste a mi vida fue vivir todo aquello que no pensaba, tu
        manera de arriesgarte a actuar me llevó a seguir tu corriente. Pase la
        tarde con una sola cosa en mente: Tú. ¿Dejar de pensar en tí? Eso ni
        soñarlo, no podía parar de mirarte e imaginar la probabilidad de que
        sucediera lo que pasó. Si bien te has dado cuenta de mí es que esas ganas
        contigo no me las puedo contener y culpo al sonar de las palabras en tu boca,
        la sinceridad en tu sonrisa, lo dulce de tu mirada y la suavidad de la piel
        que todavía no había probado. Tus labios. Sentirlos pegados a los míos
        fue la mejor sensación que pude haber sentido.
        `
    },
    9: {
        titulo: "La brisa de la tarde",
        pista: "Los momentos especiales se crean",
        texto: `
        Un lugar al que nunca había entrado, pero, uno al que tú ya habías ido. La
        confianza aún se iba generando y la unión más creciente se notaba. Siempre
        tendré pasmada la forma en que te expresas, cómo demuestras tu gusto, cómo
        brillas dentro de este mundo. Si Dios me dio los ojos, fueron estos para
        admirarte; si me dió la boca, fue esta para alabarte; si me dió el alma, fue
        está para unirla con la tuya. Aunque, molesto por la demora no evitaba
        la felicidad que tengo al estar contigo. Algo característico siempre vas a
        tener, puesto que tu afirmación es peculiar. No fue un sí, fue un ya. Un
        ya te amo, ya te deseo, ya te adoro y ya te anhelo.
        `
    },
    10: {
        titulo: "Nuevo regalo",
        pista: "Buen momento para agarrar la guitarra...",
        texto: `
        Si existe alguna banda que compartimos como gusto es Morat, por ello decidí
        escoger la canción con la cual siento que nuestra historia de amor está
        creciento. Dale click a la guitarra mi vida <a href="https://www.youtube.com/watch?v=J9olJIUWKOs" target="_blank" class="modal-link">🎸</a>.
        `,
        esEspecial: true
    },
    11: {
        titulo: "",
        pista: "",
        texto: ``
    },
    12: {
        titulo: "",
        pista: "",
        texto: ``
    },
    13: {
        titulo: "",
        pista: "",
        texto: ``
    },
    14: {
        titulo: "",
        pista: "",
        texto: ``
    },
    15: {
        titulo: "",
        pista: "",
        texto: ``,
        esEspecial: true
    },
    16: {
        titulo: "",
        pista: "",
        texto: ``
    },
    17: {
        titulo: "",
        pista: "",
        texto: ``
    },
    18: {
        titulo: "",
        pista: "",
        texto: ``
    },
    19: {
        titulo: "",
        pista: "",
        texto: ``
    },
    20: {
        titulo: "",
        pista: "",
        texto: ``,
        esEspecial: true
    },
    21: {
        titulo: "",
        pista: "",
        texto: ``
    },
    22: {
        titulo: "",
        pista: "",
        texto: ``
    },
    23: {
        titulo: "",
        pista: "",
        texto: ``
    },
    24: {
        titulo: "",
        pista: "",
        texto: ``
    },
    25: {
        titulo: "",
        pista: "",
        texto: ``,
        esEspecial: true
    },
    26: {
        titulo: "",
        pista: "",
        texto: ``
    },
    27: {
        titulo: "",
        pista: "",
        texto: ``
    },
    28: {
        titulo: "",
        pista: "",
        texto: ``
    },
    29: {
        titulo: "",
        pista: "",
        texto: ``
    },
    30: {
        titulo: "",
        pista: "",
        texto: ``,
        esEspecial: true
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