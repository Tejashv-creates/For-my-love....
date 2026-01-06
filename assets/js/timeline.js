// Glow effect on scroll
const dots = document.querySelectorAll('.milestone .dot');
const cards = document.querySelectorAll('.milestone .card');

function inViewport(el) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 0.8 && r.bottom > 0;
}

function onScroll() {
  dots.forEach((dot, i) => {
    if (inViewport(cards[i])) {
      dot.style.boxShadow = '0 0 18px #ff9db0';
    } else {
      dot.style.boxShadow = '0 0 6px #ff9db0';
    }
  });
}
document.addEventListener('scroll', onScroll);
onScroll();

// Simple fireworks animation
const fw = document.getElementById('fireworks');
if (fw) {
  function burst() {
    const spark = document.createElement('span');
    const size = Math.random() * 6 + 4;
    spark.style.position = 'absolute';
    spark.style.left = Math.random() * 100 + '%';
    spark.style.top = Math.random() * 100 + '%';
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';
    spark.style.borderRadius = '50%';
    spark.style.background = Math.random() > 0.5 ? '#ffc0cb' : '#ffffff';
    spark.style.boxShadow = '0 0 8px #ff9db0';
    fw.appendChild(spark);
    setTimeout(() => fw.removeChild(spark), 1500);
  }
  // Trigger near end of scroll
  window.addEventListener('scroll', () => {
    const endMilestone = document.querySelector('.milestone.end');
    if (!endMilestone) return;
    const r = endMilestone.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.7) {
      const int = setInterval(burst, 80);
      setTimeout(() => clearInterval(int), 2500);
    }
  });
}
