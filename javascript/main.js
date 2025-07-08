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
  isSmallScreen = window.innerWidth < 720;

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
  isSmallScreen = window.innerWidth < 720;
  
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

document.getElementById('darkMode').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const elements = document.querySelectorAll('.row, .row_header, .circle, .row_button, .page_link, footer, #home_link, .nav_items');
  elements.forEach(element => element.classList.toggle('dark-mode'));
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
}

/*document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});*/

time = new Date().getTime;
