function scrollPage() {
  var scrollto = document.getElementById("uparrow");
  scrollto.scrollIntoView();
}

function expand(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
