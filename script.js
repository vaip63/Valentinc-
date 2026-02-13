const yes = document.getElementById("yes");
const no = document.getElementById("no");
const menu = document.getElementById("menu");
const music = document.getElementById("music");

const giftText = "Cadoul meu sunt eu, timpul meu și toată iubirea mea ❤️";
let giftIndex = 0;

/* HARD RESET LA START */
document.querySelectorAll(".section").forEach(sec => {
  sec.style.display = "none";
});
menu.style.display = "none";

/* NO fuge 😈 */
no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  no.style.transform = translate(${x}px, ${y}px);
});

/* YES = green light */
yes.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  menu.style.display = "block";
  music.play().catch(() => {});
  launchConfetti();
});

/* AFIȘARE SECȚIUNI */
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

/* GIFT – TYPEWRITER */
function startGift() {
  const el = document.getElementById("typewriter");
  el.innerHTML = "";
  giftIndex = 0;

  const interval = setInterval(() => {
    el.innerHTML += giftText[giftIndex];
    giftIndex++;
    if (giftIndex >= giftText.length) clearInterval(interval);
  }, 60);
}

/* CONFETTI */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dy: Math.random() * 3 + 1
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#ff4d6d";
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }

  animate();
}
