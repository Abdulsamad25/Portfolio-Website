function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links .links');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      links.forEach(link => link.classList.remove('active'));
      this.classList.add('active');

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }

      // Close the menu after clicking a link in mobile view
      const navLinks = document.getElementById('navLinks');
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });
});

// Dark Mode
