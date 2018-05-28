$(document).ready(function() {

	//saving names
	var windowS = $(window);
	var container = $('.gameBox');
	var bird = $('.bird');
	var block = $('.block');
	var block_1 = $('#block_1');
	var block_2 = $('#block_2');
	var restart = $('#reset');
	var score = $('#score');
	var container_reset = $('.resetBox');

	//saving initial values
	var window_width = parseInt(windowS.width());
	var window_height = parseInt(windowS.height());
	var container_width = parseInt(container.width());
	var container_height = parseInt(container.height());
	var container_reset_width = parseInt(container.width());
	var container_reset_height = parseInt(container.height());
	var block_initial_position = parseInt(block.css('right'));
	var block_initial_height = parseInt(block.css('height'));
	var bird_left = parseInt(bird.css('left'));
	var bird_height = parseInt(bird.height());
	var speed = 10;

	//states
	var go_up = false;
	var score_updated = false;
	var game_over = false;

	positionBox();

	//position the game at start
	function positionBox(){
		container.css('left', window_width/2 - container_width/2);
		container.css('top', window_height/2 - container_height/2);
		container_reset.css('left', window_width/2 - container_reset_width/2);
		container_reset.css('top', window_height/2 - container_reset_height/2);		
		windowS.resize(function(){
			var window_width = parseInt(windowS.width());
    		var window_height = parseInt(windowS.height());
    		container_reset.css('left', window_width/2 - container_reset_width/2);
			container_reset.css('top', window_height/2 - container_reset_height/2);	
		});
	}

	//Start the game
	container.click(function(){
		var the_game = setInterval(function () {
			//colisions
			if(collision(bird, block_1) || collision(bird, block_2) || parseInt(bird.css('top')) <= 0 || parseInt(bird.css('top')) > container_height - bird_height){
				stop_the_game();
			}
			else{
				var block_current_position = parseInt(block.css('right'));
				var bird_current_position = parseInt(bird.css('top'));
				
				//update the score
				if (block_current_position > container_width - bird_left) {
					if (score_updated === false) {
						score.text(parseInt(score.text()) + 1);
						score_updated = true;
					}
				}
				//if the blocks are in frame
				if(block_current_position > container_width){
					var block_new_height = parseInt(Math.random() * 100);

					//block_1 change size
					block_1.css('height', block_initial_height - block_new_height);
					//block 2 change size
					block_2.css('height', block_initial_height + block_new_height);

					score_updated = false;

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
			restart.fadeIn(400);
			$('.btn_reset').click(function() {
				game_over = false;
				location.reload();
			});
		}
		function collision($div1, $div2) {
			var x1 = $div1.offset().left;
			var y1 = $div1.offset().top;
			var h1 = $div1.outerHeight(true);
			var w1 = $div1.outerWidth(true);
			var b1 = y1 + h1;
			var r1 = x1 + w1;
			var x2 = $div2.offset().left;
			var y2 = $div2.offset().top;
			var h2 = $div2.outerHeight(true);
			var w2 = $div2.outerWidth(true);
			var b2 = y2 + h2;
			var r2 = x2 + w2;
	
			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
			return true;
		}
	});
});