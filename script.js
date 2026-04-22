// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============ MOBILE MENU ============
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenu');

mobileToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
function closeMenu() { mobileMenu.classList.remove('open'); }

// ============ WARD TABS ============
document.querySelectorAll('.ward-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ward-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ward-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// ============ SCROLL REVEAL ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============ HERO PARTICLES ============
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 15; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 120 + 40;
  p.style.cssText = `
    width: ${size}px; height: ${size}px;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation-duration: ${Math.random() * 15 + 10}s;
    animation-delay: ${Math.random() * 5}s;
  `;
  particlesContainer.appendChild(p);
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
