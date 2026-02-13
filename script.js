const yes = document.getElementById("yes");
const no = document.getElementById("no");
const menu = document.getElementById("menu");
const music = document.getElementById("music");

const giftText = "Toată iubirea, atenția și timpul sunt doar pentru tine ❤️";
let giftIndex = 0;

/* Reset la start */
window.onload = () => {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });
  menu.style.display = "none";
};

/* NO fuge */
no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES */
yes.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  menu.style.display = "block";

  music.volume = 0.5;
  music.play().catch(() => {});

  launchConfetti();
});

/* Afișare secțiuni */
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

/* Typewriter gift */
function startGift() {
  const el = document.getElementById("typewriter");
  el.innerHTML = "";
  giftIndex = 0;

  const interval = setInterval(() => {
    el.innerHTML += giftText[giftIndex];
    giftIndex++;
    if (giftIndex >= giftText.length) clearInterval(interval);
  }, 50);
}

/* Confetti */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

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
