// Music toggle (placeholder)
document.getElementById('music-toggle')?.addEventListener('click', () => {
  alert('Music feature placeholder. Add your track via Howler.js or <audio>.');
});

// Cake cutting enhanced
const cutBtn = document.getElementById('cut-cake');
const slice = document.getElementById('slice');
const confetti = document.getElementById('confetti');
const cakeMessage = document.getElementById('cake-message');
const knife = document.getElementById('knife');
const cake = document.getElementById('cake');

function addSparkles() {
  for (let i = 0; i < 10; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 200 + 'px';
    s.style.top = '160px';
    cake.appendChild(s);
    setTimeout(() => s.remove(), 2000);
  }
}

function addBalloons() {
  for (let i = 0; i < 3; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.left = (20 + i * 60) + 'px';
    b.style.bottom = '0px';
    cake.appendChild(b);
    setTimeout(() => b.remove(), 6000);
  }
}

cutBtn?.addEventListener('click', () => {
  knife.classList.add('active');
  setTimeout(() => {
    slice.classList.add('active');
    addSparkles();
    addBalloons();
    cakeMessage.classList.remove('hidden');
    confetti.classList.remove('hidden');
    setTimeout(() => confetti.classList.add('hidden'), 2000);
  }, 1000);
});

// Lightbox
const gridImgs = document.querySelectorAll('.grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

gridImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
    lightbox.style.display = 'grid'; // important!
  });
});

lightboxClose?.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightbox.style.display = 'none';
});

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
    lightbox.style.display = 'none';
  }
});
