
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
var x = Math.floor((Math.random() * 101) + 1);
function randomNumber(){
	console.log("random number: " + x);
}

//Current game
function thisGame(){
	$(".button").click(function(e){
		e.preventDefault();

		//Add guess to list
		$("#guessList").append('<li>' + ($("#userGuess").val()) + '</li>');

		//Hot or cold prompts
		if (($("#userGuess").val()) > x ) { ($("h2#feedback").text("Greater")); }
		else { ($("h2#feedback").text("Lesser")); }

		//Number of attempts
		$('#count').html(function(i, val){ 
			return val*1+1 
		});
	});
}


//Refresh page; start new game
function newGame(){
	$('.new').click(function(){
		location.reload();
	})
}


