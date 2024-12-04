let isSmallScreen = window.innerWidth < 768;

function menuToggle() {
    const button = document.getElementById('dropDown');
    const links = document.querySelectorAll('.page_link');
  
    if (isSmallScreen) {
    links.forEach(link => {
      link.style.display = link.style.display === 'block' ? 'none' : 'block';
      button.style.display = button.style.backgroundColor === "#363731" ? "#c3cf72" : "#363731";
      button.style.color = button.style.color === "black" ? "white" : "black";
    });
  } else {
    // Always show on larger screens
    links.forEach(link => {
        link.style.display = 'block';
        button.style.backgroundColor = "#c3cf72";
        button.style.color = "black"
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
