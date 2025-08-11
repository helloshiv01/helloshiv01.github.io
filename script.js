// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with persistence
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Replace icons after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) window.feather.replace({ 'stroke-width': 1.6 });
});

// Optional: simple scroll-reveal for elements with .hover-up
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('seen');
      e.target.style.transitionDelay = '0s';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.hover-up').forEach(el => observer.observe(el));
