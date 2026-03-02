// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

// Nav scroll class
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 60);
});

// AI Concierge tab switcher
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('border-b-4','border-[#4a1415]','text-[#4a1415]');
      b.classList.add('text-gray-500');
      b.setAttribute('aria-selected','false');
    });
    btn.classList.add('border-b-4','border-[#4a1415]','text-[#4a1415]');
    btn.classList.remove('text-gray-500');
    btn.setAttribute('aria-selected','true');
  });
});

// Lucide icons init
if (typeof lucide !== 'undefined') lucide.createIcons();