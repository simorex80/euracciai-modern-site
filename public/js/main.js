const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
if (mobileToggle && mobileNav) {
  const closeMenu = () => {
    document.body.classList.remove('mobile-nav-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', mobileToggle.dataset.openLabel || '');
    mobileNav.hidden = true;
  };

  mobileToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('mobile-nav-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    const openLabel = mobileToggle.dataset.openLabel || '';
    const closeLabel = mobileToggle.dataset.closeLabel || '';
    mobileToggle.setAttribute('aria-label', isOpen ? closeLabel : openLabel);
    mobileNav.hidden = !isOpen;
    if (isOpen) mobileNav.querySelector('a')?.focus();
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNav.hidden) {
      closeMenu();
      mobileToggle.focus();
    }
  });
}
