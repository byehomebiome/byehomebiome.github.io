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

//COOKIES FOR THE FORM
            // to be called when the Submit button is clicked
		var sData = function(){
			let rating = document.forms[0].rating.value;
			let issues = document.forms[0].issues.value;
			let likemost = document.forms[0].likemost.value;			
			let suggestions = document.forms[0].suggestions.value;
			let donate = document.forms[0].donate.value;
			
			let objComment = {ratings: rating, issue: issues, likesmost: likemost, suggestion: suggestions, donates: donate };
			
			let jsonString = JSON.stringify(objComment);
			
			cookie = (!localStorage.getItem("cookie")) ? 1 : Number(localStorage.getItem("cookie")) + 1;
			
			record = "Record" + cookie;
			
			localStorage.setItem(record, jsonString)
			
			localStorage.setItem("cookie", cookie.toString())
		}
		
		// to be called the moment the webpage reloads
		var rData = function(){
			cookie = localStorage.getItem("cookie")
			
			if (cookie) {
				for (i=1; i<=cookie; i++) {
					record = "Record" + i	// construct the cookie keynames 
					
					text = localStorage.getItem(record); 

					recordObject = JSON.parse(text);
					
					comments.innerHTML += "<h4> You rated Bye Home, Biomes a <span>" + recordObject.ratings + "</span> out of 5! </h4> We are delighted to know that you liked our website the most for its quality of being<span> " + recordObject.likesmost + 
						"</span>. We shall also take into account the issues you have encountered ('<span>" + recordObject.issue + "</span>') and the suggestions you have offered ('<span>" + recordObject.suggestion 
						+ "</span>') for Bye Home, Biomes. <br> The team would also like to express our gratitude for your pledge of donating <span>" + recordObject.donates + "</span> pesos, and/or for at least paying our website a warm visit. Have a good day! <br /><hr>";
				}
			}
			else {comments.innerHTML = "Input your feedback."}	
		}			
