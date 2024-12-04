let isSmallScreen = window.innerWidth < 768;

function menuToggle() {
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
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav_bar").style.top = "0";
  } else {
    document.querySelector(".nav_bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
