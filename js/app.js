$(document).ready(function(){
	randomNumber();
	thisGame();
	newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

//Generate random number
var x = Math.floor((Math.random() * 100) + 1);
function randomNumber(){
	console.log("random number: " + x);
}

//Current game
function thisGame(){
	$(".button").click(function(e){
		e.preventDefault();
		var guess =  $('#userGuess').val();
		guess =  Number(guess);
		var diff = Math.abs(x - guess);
		//var g = guess++

			//Check if guess is a string
			if (guess != Number(guess)) {
				alert("Enter number");
				$('#userGuess').val(''); //clear input field
			}

			//Check if guess is larger than 100 or smaller than 1
			else if (guess > 100 || guess < 1){
				alert("Enter number between 1-100");
				$('#userGuess').val(''); //clear input field
			}
			else {
				console.log(guess);
				
				//Add guess to list
				$("#guessList").append('<li>' + ($("#userGuess").val()) + '</li>');

				//Hot or cold prompts
				if (diff === 0){
					$("h2#feedback").text("Correct!");
				} 
				else if (diff >= 1  && diff <= 10){
					$("h2#feedback").text("Hot");
				}
				else if (diff >=11 && diff <= 30){
					$("h2#feedback").text("Warm");
				}
				else if (diff >=31 && diff <= 50){
					$("h2#feedback").text("Warm");
				}
				else{
					$("h2#feedback").text("Ice Cold");
				}
				
				//Count number of attempts
				$('#count').html(function(i, val){ 
					return val*1+1 
				});

				$('#userGuess').val(''); //clear input field
			}
	});
}


//Refresh page; start new game
function newGame(){
	$('.new').click(function(){
		location.reload();
	})
}



