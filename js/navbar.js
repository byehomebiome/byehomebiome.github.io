function showNav() {
  var navBar = document.getElementById("top-nav");
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
  }
}
