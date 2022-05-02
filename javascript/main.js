window.onscroll = function() {stickyscroll()};

var navbar = document.getElementById("navbar");


function stickyscroll() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollBehavior() {
    document.documentElement.style.scrollBehavior = "smooth";
}




