$(document).ready(function() {
	
	var turn = 'X';
	var won;
	player();

	function popUp(){
		$('.popup').removeClass('hide').addClass('show');
		$('.playerWon').empty();
		$('.playerWon').append( won );
	}
	function player(){
		$('.player').empty();
		$('.player').append( turn );
		if( turn == 'X')
		{
			$('.player').css('color', '#ff0000');
			validateX();
			validateO();
		}
		else{
			$('.player').css('color', '#000000');
			validateX();
			validateO();
		}
	}
	function validateX(){
		 if($('#q1').hasClass('selectedX') && $('#q2').hasClass('selectedX') && $('#q3').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q4').hasClass('selectedX') && $('#q5').hasClass('selectedX') && $('#q6').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  } 
		  else if($('#q7').hasClass('selectedX') && $('#q8').hasClass('selectedX') && $('#q9').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q1').hasClass('selectedX') && $('#q4').hasClass('selectedX') && $('#q7').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q2').hasClass('selectedX') && $('#q5').hasClass('selectedX') && $('#q8').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q3').hasClass('selectedX') && $('#q6').hasClass('selectedX') && $('#q9').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q1').hasClass('selectedX') && $('#q5').hasClass('selectedX') && $('#q9').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q3').hasClass('selectedX') && $('#q5').hasClass('selectedX') && $('#q7').hasClass('selectedX')) {
		    won = 'X';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
	}
	function validateO(){
		 if($('#q1').hasClass('selectedO') && $('#q2').hasClass('selectedO') && $('#q3').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q4').hasClass('selectedO') && $('#q5').hasClass('selectedO') && $('#q6').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  } 
		  else if($('#q7').hasClass('selectedO') && $('#q8').hasClass('selectedO') && $('#q9').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q1').hasClass('selectedO') && $('#q4').hasClass('selectedO') && $('#q7').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q2').hasClass('selectedO') && $('#q5').hasClass('selectedO') && $('#q8').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q3').hasClass('selectedO') && $('#q6').hasClass('selectedO') && $('#q9').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q1').hasClass('selectedO') && $('#q5').hasClass('selectedO') && $('#q9').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
		  else if($('#q3').hasClass('selectedO') && $('#q5').hasClass('selectedO') && $('#q7').hasClass('selectedO')) {
		    won = 'O';
		    popUp();
		    /*alert('ganhou ' + won);*/
		  }
	}
	function reset(){
 		$('div').children().removeClass('selectedX').removeClass('selectedO');
 		$('.player').empty();
 		turn ='X';
 		$('.popup').removeClass('show').addClass('hide');
 	}

 	$('.galoRow').click(function(){
 		if(turn == 'X'){
 			if($(this).is('.selectedX') || $(this).is('.selectedO'))
 			{
 				console.log('try another one');
 			}
 			else
 			{
 				$(this).addClass('selectedX');
 				turn ='O';
 			}
 		}
 		else
 		{
 			if($(this).is('.selectedX') || $(this).is('.selectedO'))
 			{
 				console.log('try another one');
 			}
 			else
 			{
 				$(this).addClass('selectedO');
 				turn ='X';
 			}
 		}
 		player();
 	});

 	$('.button').click(function(){
 		reset();
 		player();
 	});	
});