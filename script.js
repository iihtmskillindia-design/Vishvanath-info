const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

faders.forEach(fader => appearOnScroll.observe(fader));

function openModal() {
  document.getElementById('qrModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('qrModal').style.display = 'none';
}
