function userrating() {
  if (document.getElementById("rating1").checked) {
    message = "I don't like it at all!"
  }
  else if (document.getElementById("rating2").checked) {
    message = "I don't like some things about it!"
  }
  else if (document.getElementById("rating3").checked) {
    message = "I'm okay with it!"
  }
  else if (document.getElementById("rating4").checked) {
    message = "I like it!"
  }
  else if (document.getElementById("rating5").checked) {
    message = "I love it!"
  }
  
  document.getElementById("ratingtext").innerHTML = message;
}