const openGift = document.getElementById('open-gift');
const giftBox = document.getElementById('gift-box');

openGift?.addEventListener('click', () => {
  giftBox.classList.remove('hidden');
  openGift.style.display = 'none';
});
