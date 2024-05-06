window.onscroll = function() {floatHeader()};

var header = document.getElementById("www-presentation-header");
var sticky = header.offsetTop;

function floatHeader() {
  if (window.pageYOffset > www-presentation-header-floating) {
    header.classList.add("www-presentation-header-floating");
  } else {
    header.classList.remove("www-presentation-header-floating");
  }
};
