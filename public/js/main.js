const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('mobile-nav-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    const openLabel = mobileToggle.getAttribute('data-open-label');
    const closeLabel = mobileToggle.getAttribute('data-close-label');
    mobileToggle.setAttribute('aria-label', isOpen ? (closeLabel || 'Close menu') : (openLabel || 'Open menu'));
    mobileNav.hidden = !isOpen;
  });
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('mobile-nav-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    });
  });
}
