function scrollPage() {
  var scrollto = document.getElementById("uparrow");
  scrollto.scrollIntoView();
  //document.getElementById("leftdiv").scrollIntoView();
}

function expand(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
