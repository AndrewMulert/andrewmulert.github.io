year = document.querySelector("#year").textContent = new Date().getFullYear();

let isSmallScreen = window.innerWidth < 768;

document.getElementById("dropDown").addEventListener('click', menuToggle);
const links = document.querySelectorAll('.page_link');

function menuToggle() {
  if (isSmallScreen) {
    links.forEach(link => {
      link.style.display = link.style.display === 'block' ? 'none' : 'block';
    });
  } else {
    links.forEach(link => {
      link.style.display = 'block';
    });
  }
}

var prevScrollpos = window.scrollY;
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', () => {
  isSmallScreen = window.innerWidth < 640;

  if (isSmallScreen) {
    links.forEach(link => {
      link.style.display = 'none';
    });
  } else {
    links.forEach(link => {
      link.style.display = 'block';
    });
  }
});

function handleResize() {
  isSmallScreen = window.innerWidth < 640;
  
  if (!isSmallScreen) {
    links.forEach(link => {
        link.style.display = 'block';
    });
  } else {
    links.forEach(link => {
      link.style.display = 'none';
    });
  }
}

window.addEventListener('resize', handleResize);

function handleScroll() {
  const links = document.querySelectorAll('.page_link');
  const isOpen = links[0].style.display === 'block';

  if (isOpen && isSmallScreen) {
    links.forEach(link => {
      link.style.display = 'none';
    });
  }
}

function toggleDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
  const elements = document.querySelectorAll('.row, .row_header, .row_content, .circle, .row_button, .page_link, footer, #home_link, .nav_items, .glow, .hero_text');
  elements.forEach(element => element.classList.toggle('dark-mode', enabled));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'enabled') {
    toggleDarkMode(true);
  } else {
    toggleDarkMode(false);
  }
});

document.getElementById('darkMode').addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggleDarkMode(!isDarkMode);

  localStorage.setItem('darkMode', !isDarkMode ? 'enabled' : 'disabled');
});

/*document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});*/

time = new Date().getTime;
