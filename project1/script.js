// ----------------------
// PHONE: Card Toggle
// ----------------------
document.querySelectorAll('.card-dots .dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const id = dot.getAttribute('data-toggle');

    // Hide all cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active');
      if (card.getAttribute('data-card') === id) {
        card.classList.add('active');
      }
    });

    // Update dot indicators
    document.querySelectorAll('.card-dots .dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// ----------------------
// PHONE: Hamburger Menu Toggle
// ----------------------
const phoneMenuBtn = document.getElementById('phone-menu-toggle');
const phoneMenu = document.getElementById('phone-menu');

phoneMenuBtn.addEventListener('click', () => {
  if (phoneMenu.style.display === 'block') {
    phoneMenu.style.display = 'none';
  } else {
    phoneMenu.style.display = 'block';
  }
});

// ----------------------
// OPTIONAL: Top Navbar Hamburger Toggle (Mobile View)
// ----------------------
// If you're using a hamburger in the top navbar for mobile view,
// you can use this code as well

const topHamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authBtns = document.querySelector('.auth');

if (topHamburger) {
  topHamburger.addEventListener('click', () => {
    topHamburger.classList.toggle('open');

    // Show/hide nav and auth on mobile
    if (navLinks && authBtns) {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      authBtns.style.display = authBtns.style.display === 'flex' ? 'none' : 'flex';
    }
  });
}
