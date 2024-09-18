document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle'); // Changed from querySelector('.toggle') to getElementById('toggle')
    const nav = document.getElementById('nav');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    } else {
      console.error('Toggle or nav element not found');
    }
  });
