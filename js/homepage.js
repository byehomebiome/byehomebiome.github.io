function scrollPage() {   document.getElementById("leftdiv").scrollIntoView();
}

function expand(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function showNav() {
  var navBar = document.getElementById("top-nav");
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
  }
}
