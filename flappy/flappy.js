$(document).ready(function() {

	//saving names
	var windowS = $(window);
	var container = $('.gameBox');
	var bird = $('.bird');
	var block = $('.block');
	var block_1 = $('#block_1');
	var block_2 = $('#block_2');
	var restart_btn = $('.btn_reset');

	//saving initial values
	var window_width = parseInt(windowS.width());
	var window_height = parseInt(windowS.height());
	var container_width = parseInt(container.width());
	var container_height = parseInt(container.height());
	var block_initial_position = parseInt(block.css('right'));
	var block_initial_height = parseInt(block.css('height'));
	var bird_left = parseInt(bird.css('left'));
	var bird_height = parseInt(bird.height());
	var speed = 10;

	//states
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
		if(parseInt(bird.css('top')) <= 0 || parseInt(bird.css('top')) > container_height - bird_height){
			stop_the_game();
		}
		else{
			var block_current_position = parseInt(block.css('right'));
			var bird_current_position = parseInt(bird.css('top'));
			//if the blocks are in frame
			if(block_current_position > container_width){
				var block_new_height = parseInt(Math.random() * 100);

				//block_1 change size
				block_1.css('height', block_initial_height - block_new_height);
				//block 2 change size
				block_2.css('height', block_initial_height + block_new_height);

				block_current_position = block_initial_position;
			}
			//move the blocks
			block.css('right', block_current_position + speed);
			//init fall
			if (go_up === false) {
				go_down();
			}
		}
	}, 40);
	//keydown jump
	$(window).keydown(function (e) {
		if (e.keyCode === 32 && go_up === false && game_over === false) {
				go_up = setInterval(up, 50);
		}
	});
	//keyup fall
	$(window).keyup(function (e) {
		if (e.keyCode === 32) {
				clearInterval(go_up);
				go_up = false;
		}
	});
	//change position of the bird
	function up(){
		bird.css('top', parseInt(bird.css('top')) - 7);
	}
	function go_down(){
		bird.css('top', parseInt(bird.css('top')) + 10);
	}
	//stop the game
	function stop_the_game(){
		clearInterval(the_game);
		game_over = true;
		restart_btn.fadeIn(100);
	}
});