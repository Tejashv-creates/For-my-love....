// Music toggle (placeholder)
document.getElementById('music-toggle')?.addEventListener('click', () => {
  alert('Music feature placeholder. Add your track via Howler.js or <audio>.');
});

// Cake cutting
const cutBtn = document.getElementById('cut-cake');
const slice = document.getElementById('slice');
const confetti = document.getElementById('confetti');
const cakeMessage = document.getElementById('cake-message');

cutBtn?.addEventListener('click', () => {
  slice.style.width = '60px';
  confetti.classList.remove('hidden');
  cakeMessage.classList.remove('hidden');
  setTimeout(() => confetti.classList.add('hidden'), 2000);
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
