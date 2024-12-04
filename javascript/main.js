let isSmallScreen = window.innerWidth < 768;

function menuToggle() {
  const button = document.getElementById('dropDown');
  const links = document.querySelectorAll('.page_link');

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

window.addEventListener('resize', () => {
  isSmallScreen = window.innerWidth < 768;
  menuToggle();
});

document.getElementById("dropDown").addEventListener('click', menuToggle);

var prevScrollpos = window.scrollY;
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const links = document.querySelectorAll('.page_link');
  const isOpen = links[0].style.display === 'block';

  if (isOpen && isSmallScreen) {
    menuToggle();
  }
}
