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
  const elements = document.querySelectorAll('.row, .row_header, .row_content, .circle, .row_button, .page_link, footer, #home_link, .nav_items, .glow, .hero_text, #infinitytraingradient');
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

time = new Date().getTime;

$('form').on('submit', (e) => {
  e.preventDefault();

  const fname = $('#fname').val().trim();
  const lname = $('#lname').val().trim();
  const email = $('#email').val().trim();
  const tel = $('#tel').val().trim();
  const msg = $('#msg').val().trim();
  
  const data = { fname, lname, email, tel, msg };

  const formStatusLabel = $('#formStatus');
  formStatusLabel.text('Sending your message...')
  formStatusLabel.css({'color': '#2A2E01', 'background-color': '#EDED98', 'padding': '10px', 'border-color': '#2A2E01'});

  $.ajax({
    type: 'POST',
    url: '/contact',
    data: JSON.stringify(data),
    contentType: 'application/json'
  })
  .done((response) => {
    console.log('Data has been received:', response);
    formStatusLabel.text(response.message), 60000;
    formStatusLabel.css({'color': '#052E01', 'background-color': '#9fed98', 'padding': '10px', 'border-color': '#052E01'});

    $('form').trigger('reset');

    setTimeout (() => {
      formStatusLabel.text('');
      formStatusLabel.css({'background-color': 'transparent', 'padding': '0'});
    }, 6000);
  })
  .fail((jqXHR) => {
    const errorMessage = jqXHR.responseJSON.message || 'An unknown error occurred.';
    console.error('Submission failed:', errorMessage);
    formStatusLabel.text(errorMessage);
    formStatusLabel.css({'color': '#2E0C01', 'background-color': '#EDAD98', 'padding': '10px', 'border-color': '#2E0C01'});
  })
});
