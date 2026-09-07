// Constelación de fondo
const canvas = document.getElementById("constellationCanvas");
const ctx = canvas.getContext("2d");
let starsArray = [];
const NUMBER_OF_STARS = 85;
const CONNECTION_DISTANCE = 120;

function resizeCanvas() {
  if (canvas) {
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
    if (this.opacity < 0.2 || this.opacity > 0.9)
      this.fadeSpeed = -this.fadeSpeed;
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
        let alpha = (1 - distance / CONNECTION_DISTANCE) * 0.15;
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

// Inicializar Fondo
resizeCanvas();
initStars();
animateBackground();