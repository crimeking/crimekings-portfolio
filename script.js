document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      updateActiveNav();
    }
  });
});

window.addEventListener('scroll', updateActiveNav);

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('🎉 AWESOME! Your message was sent! High five! 🎉\n\nI\'ll get back to you ASAP! 🚀');
    this.reset();
  });
}

document.querySelector('.logo').addEventListener('click', function() {
  alert('🎮 You found the secret! You\'re awesome! 🎮\n\nHave a fun day! 🚀✨');
});

updateActiveNav();
