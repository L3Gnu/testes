$(document).ready(function() {

	//saving values
	var windowS = $(window);
	var container = $('.gameBox');
    var bird = $('.bird');
    var block = $('.block');
    var block_1 = $('.block_1');
    var block_2 = $('.block_2');
    var restart_btn = $('.restart_btn');

    //saving some initial setup
    var window_width = parseInt(windowS.width());
    var window_height = parseInt(windowS.height());
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var block_initial_position = parseInt(block.css('right'));
    var block_initial_height = parseInt(block.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 5;

    //some other declarations
    var go_up = false;
    var game_over = false;

	positionBox();

	function positionBox(){
		container.css('left', window_width/2 - container_width/2);
		container.css('top', window_height/2 - container_height/2);	
		windowS.resize(function(){
			var window_width = parseInt(windowS.width());
    		var window_height = parseInt(windowS.height());
    		container.css('left', window_width/2 - container_width/2);
			container.css('top', window_height/2 - container_height/2);	
		});
	}

	var the_game = setInterval(function () {

		var block_current_position = parseInt(block.css('right'));
		//console.log(block_current_position);
		//console.log(block_initial_position);
		

		block.css('right', block_current_position + speed);
		//console.log(speed);
		//console.log(block_current_position);

		if(block_current_position > container_width){
			//console.log('1');
		}

	}, 20);
});