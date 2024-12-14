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
    // Always show on larger screens
    links.forEach(link => {
      link.style.display = 'block';
    });
  }
}

var prevScrollpos = window.scrollY;
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', setNone);

function setNone() {
    if (isSmallScreen) {
      links.forEach(link => {
        link.style.display = 'none';
      });
    }
}

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

  const rows = document.querySelectorAll('.row'); 
  const headers2 = document.querySelectorAll('.row_header');
  const circles = document.querySelectorAll('.circle');
  const buttons = document.querySelectorAll('.row_button')
  const pagelinks = document.querySelectorAll('.page_link');

  rows.forEach(row => {
    row.classList.toggle('dark-mode');
  });

  headers2.forEach(header => {
    header.classList.toggle('dark-mode');
  })

  circles.forEach(circle => {
    circle.classList.toggle('dark-mode');
  })

  buttons.forEach(button => {
    button.classList.toggle('dark-mode');
  })

  pagelinks.forEach(pagelink => {
    pagelink.classList.toggle('dark-mode');
  })

  const footer = document.querySelector('footer');
  if (footer) { 
    footer.classList.toggle('dark-mode');
  }

  const homelink = document.getElementById('home_link'); 
  if (homelink) { 
    homelink.classList.toggle('dark-mode'); 
  }
}

time = new Date().getTime;
