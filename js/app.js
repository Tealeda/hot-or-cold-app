
$(document).ready(function(){
	randomNumber();
	thisGame();
	prevGuess();
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

//Previous guess value
var pGuess = $('#userGuess').val();
function prevGuess(){
	console.log("prevGuess is: " + pGuess);
}

//Current game
function thisGame(){
	$(".button").click(function(e){
		e.preventDefault();
		var guess =  $('#userGuess').val();
		guess =  Number(guess);
		var diff = Math.abs(x - guess);
		var count = $('#count').return;

		//Check if guess is a string
		if (guess != Number(guess)) {
			alert("You can only enter numbers. Try again");
			$('#userGuess').val(''); //clear input field
		}

		//Check if guess is larger than 100 or smaller than 1
		else if (guess > 100 || guess < 1){
			alert("Enter number between 1-100. Try again.");
			$('#userGuess').val(''); //clear input field
		}
		else{
			//Add guess to list
			$("#guessList").append('<li>' + ($("#userGuess").val()) + '</li>');

			//Count number of attempts
			$('#count').html(function(i, val){ 
				return val*1+1	
			});
			
			console.log(guess);

			
			//Hot or cold prompts

			if ($('#count') > 1){
				console.log("button clicked twice");
			}
			else if (diff === 0){
				$("h2#feedback").text("Bingo!");
			} 
			else if (diff >= 1  && diff <= 5){
				$("h2#feedback").text("Hot");
			}
			else if (diff >= 6 && diff <= 15){
				$("h2#feedback").text("Warm");
			}
			else if (diff >= 16 && diff <= 30){
				$("h2#feedback").text("Luke Warm");
			}
			else if (diff >= 31 && diff <= 50){
				$("h2#feedback").text("Cold");
			}
			else{
				$("h2#feedback").text("Ice Cold");
			}//end of prompts for first guess
			
			$('#userGuess').val(''); //clear input field
			
			prevGuess = guess;
			
		}
	})//click function
}//function thisGame()

//Refresh page; start new game
function newGame(){
	$('.new').click(function(){
		location.reload();
	})
}



