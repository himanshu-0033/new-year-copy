/* -------------------------
   Smooth Scroll
-------------------------- */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* -------------------------
   Background Music (Safe Autoplay)
-------------------------- */
const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
  if (!music) return;

  music.volume = 0.6;
  playing ? music.pause() : music.play();
  playing = !playing;
}

/* Auto-start music after first click */
document.addEventListener("click", () => {
  if (!playing && music) {
    music.play().catch(() => {});
    playing = true;
  }
}, { once: true });

/* -------------------------
   Floating Hearts Background
-------------------------- */
setInterval(() => {
  const container = document.getElementById("heart-container");
  if (!container) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  container.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);

/* -------------------------
   Countdown Timer
-------------------------- */
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
  const timer = document.getElementById("timer");
  if (!timer) return;

  const diff = targetDate - Date.now();
  if (diff <= 0) return;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

/* -------------------------
   Chat Animation
-------------------------- */
const chats = [
  { text: "Do you remember our first talk?", side: "left" },
  { text: "From strangers to something special 💕", side: "right" },
  { text: "Snapchat se shuru hui kahaani…", side: "left" },
  { text: "Aur pata hi nahi chala kab tum meri aadat ban gayi ❤️", side: "right" },
  { text: "Every message from you made my day brighter ✨", side: "left" }
];

let chatIndex = 0;
const chatBox = document.getElementById("chatBox");
const typing = document.getElementById("typing");

function showChat() {
  if (chatIndex >= chats.length) {
    typing.style.display = "none";
    return;
  }

  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";

    const msg = document.createElement("div");
    msg.className = `chat ${chats[chatIndex].side}`;
    msg.innerText = chats[chatIndex].text;
    chatBox.appendChild(msg);

    chatIndex++;
    setTimeout(showChat, 1200);
  }, 800);
}

/* -------------------------
   Fireworks (REAL Animation)
-------------------------- */
const canvas = document.getElementById("fireworks");
const ctx = canvas?.getContext("2d");

if (canvas) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function launchFireworks() {
  if (!ctx) return;
  canvas.style.display = "block";

  let particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      dx: (Math.random() - 0.5) * 6,
      dy: (Math.random() - 0.5) * 6,
      life: 100
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      p.life--;
    });

    particles = particles.filter(p => p.life > 0);
    if (particles.length > 0) requestAnimationFrame(animate);
  }

  animate();
}

/* -------------------------
   Scroll Effects (Optimized)
-------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY > 800)
    document.getElementById("secret").style.opacity = 1;

  if (window.scrollY > 300 && chatIndex === 0)
    showChat();
});

/* -------------------------
   Surprise Reveal
-------------------------- */
function revealSurprise() {
  document.getElementById("reveal").style.display = "block";
  launchFireworks();
}

/* -------------------------
   Slideshow
-------------------------- */
const slides = document.querySelectorAll(".slide");
const captions = [
  "My favorite smile ❤️",
  "Every moment with you is precious ✨",
  "Us, forever ♾️"
];

let slideIndex = 0;

setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
  document.getElementById("caption").innerText = captions[slideIndex];
}, 3500);

/* -------------------------
   YES Button – Heart Rain
-------------------------- */
function yesClicked() {
  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 20 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }

  setTimeout(() => {
    alert("You just made me the happiest person ❤️");
  }, 700);
}
/* -------------------------
   Emotional Shayari – Manual Flow
-------------------------- */

const shayariList = [
  "Ek saal se zyada ho gaya humein saath,<br>par har din tum naye lagte ho ❤️",

  "Is ek saal mein sirf pyaar nahi tha,<br>jhagde, aansu aur khamoshiyaan bhi thi 💔",

  "Kai baar laga sab khatam ho gaya,<br>par dil ne tumhara haath chhodne nahi diya 🫶",

  "Breakup bolkar bhi hum alag na ho paaye,<br>kyunki rishta sirf lafzon ka nahi tha ✨",

  "Yaad hai pehli baar baat hui thi?<br>Snapchat pe, bilkul anjaane se 😊",

  "Phir Insta pe baatein badhi,<br>aur WhatsApp pe dil ek doosre ka ho gaya 📱",

  "Kab dosti pyaar ban gayi,<br>aur tum meri aadat ban gaye… pata hi nahi chala ❤️",

  "Har emotional drama ke baad bhi,<br>tumhara naam hi sukoon ban gaya 🤍",

  "Perfect hum kabhi nahi rahe,<br>par saath rehna humesha chuna 💖",

  "Is New Year sirf ek khwaish hai,<br>tum ho… aur har saal ho ♾️"
];

let currentShayari = 0;
const shayariText = document.getElementById("shayariText");
const nextBtn = document.getElementById("nextBtn");

/* Show first shayari when section comes */
let shayariStarted = false;
window.addEventListener("scroll", () => {
  const section = document.querySelector(".shayari");
  if (!section || shayariStarted) return;

  if (section.getBoundingClientRect().top < window.innerHeight - 100) {
    shayariStarted = true;
    showShayari();
  }
});

function showShayari() {
  shayariText.innerHTML = shayariList[currentShayari];
  shayariText.style.animation = "shayariIn 1.2s ease forwards";

  setTimeout(() => {
    nextBtn.style.display = "inline-block";
  }, 1200);
}

function nextShayari() {
  nextBtn.style.display = "none";
  shayariText.style.animation = "shayariOut 0.8s ease forwards";

  setTimeout(() => {
    currentShayari++;

    if (currentShayari < shayariList.length) {
      showShayari();
    } 
    else {
  showFinalOverlay();
}
  }, 800);
}
/* -------------------------
   Final Emotional Unlock
-------------------------- */

function unlockForever() {
  const text = document.getElementById("lockedText");
  const overlay = document.getElementById("finalOverlay");

  text.innerHTML = `
    Payel ❤️<br><br>
    Ek saal sirf time nahi hota,<br>
    ek saal ek poori zindagi hoti hai.<br><br>

    Har breakup ke baad bhi tum wahi thi,<br>
    har drama ke baad bhi mera dil wahi tha.<br><br>

    Snapchat se shuru hui kahaani,<br>
    aaj mere har sapne ka hissa hai.<br><br>

    Main perfect nahi hoon,<br>
    par tumhare saath rehna har baar chunta hoon.<br><br>

    Aaj, kal, aur har New Year…<br>
    sirf tum ♾️
  `;

  document.getElementById("unlockBtn").style.display = "none";

  // Fireworks + Hearts
  launchFireworks();
  yesClicked();

  setTimeout(() => {
    overlay.style.display = "none";
  }, 9000);
}

/* Trigger overlay after last shayari */
function showFinalOverlay() {
  document.getElementById("finalOverlay").style.display = "flex";
}
/* -------------------------
   Memory Permission Flow
-------------------------- */

const photoList = Array.from({ length: 30 }, (_, i) =>
  `images/photo${i + 1}.jpg`
);

let currentPhoto = 0;
let photoInterval = null;

function askPermission() {
  document.getElementById("memoryBtn").style.display = "none";
  document.getElementById("permissionBox").style.display = "block";
}

function startMemories() {
  document.getElementById("permissionBox").style.display = "none";

  const slideshow = document.getElementById("memorySlideshow");
  slideshow.style.display = "block";

  // Create image elements once
  photoList.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "slide";
    if (index === 0) img.classList.add("active");
    slideshow.appendChild(img);
  });

  const slides = slideshow.querySelectorAll(".slide");
  const caption = document.getElementById("caption");

  caption.innerText = "Every memory has my heart ❤️";

  photoInterval = setInterval(() => {
    slides[currentPhoto].classList.remove("active");
    currentPhoto++;

    if (currentPhoto >= slides.length) {
      clearInterval(photoInterval);
      caption.innerText = "Thank you for reliving these moments with me ♾️";
      return;
    }

    slides[currentPhoto].classList.add("active");
    caption.innerText = `Memory ${currentPhoto + 1} of ${slides.length} 💖`;
  }, 3000);
}

function skipMemories() {
  document.getElementById("permissionBox").style.display = "none";
  document.getElementById("caption").innerText =
    "Some memories are too precious to show… 💞";

  // Smooth scroll to next section after pause
  setTimeout(() => {
    scrollToSection("shayari");
  }, 2000);
}
function goToFinalPage() {
  window.location.href = "final.html";
}
/* -------------------------
   Video Controls
-------------------------- */
const video = document.getElementById("memoryVideo");
const playBtn = document.getElementById("playBtn");
const soundBtn = document.getElementById("soundBtn");

function playVideo() {
  video.play();
  playBtn.style.display = "none";
  soundBtn.style.display = "block";

  // Pause background music if exists
  if (typeof music !== "undefined" && music) {
    music.pause();
  }
}

function toggleVideoSound() {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? "🔇" : "🔊";
}

/* Resume music when video ends */
if (video) {
  video.addEventListener("ended", () => {
    playBtn.style.display = "flex";
    soundBtn.style.display = "none";
    video.currentTime = 0;

    if (typeof music !== "undefined" && music) {
      music.play();
    }
  });
}
