// ─── YEAR ──
const fyEl = document.getElementById('footer-year');
if (fyEl) fyEl.textContent = new Date().getFullYear();

// ─── NAV SCROLL ──
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ─── MOBILE MENU ──
const burgerBtn = document.getElementById('burger-btn');
const mobileNav = document.getElementById('mobile-nav');
const iconMenu  = document.getElementById('burger-icon-menu');
const iconClose = document.getElementById('burger-icon-close');
if (burgerBtn && mobileNav) {
  burgerBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    if (iconMenu)  iconMenu.style.display  = open ? 'none'  : 'block';
    if (iconClose) iconClose.style.display = open ? 'block' : 'none';
  });
}

// ─── FAQ ACCORDION ──
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    // open clicked if it wasn't open
    if (!isOpen) item.classList.add('open');
  });
});

// ─── PRODUCT FILTER ──
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card-wrap');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      if (filter === '*' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ─── SCROLL TO TOP ──
const scrollTopBtn = document.querySelector('.scroll-top-btn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
