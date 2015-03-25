$(function() {

	var current_post = 1;

	$("#post-list button").click(function() {
		var post = parseInt($( this ).attr('post'));

		if (post != current_post) {
			if (post > current_post) {
				for (var i = current_post; i < post; i++) {
					console.log(i);
					$('.slider div:nth-child('+i+')').addClass('moving');
					$('.slider div:nth-child('+i+')').toggleClass('slide');	
				};

				$('.slider div:nth-child('+post+')').toggleClass('moving');
			}
			else {
				for (var i = current_post; i >= post; i--) {
					console.log(i);
					$('.slider div:nth-child('+i+')').addClass('moving');
					$('.slider div:nth-child('+i+')').toggleClass('slide');
				};

				$('.slider div:nth-child('+post+')').addClass('moving').removeClass('moving');
			}



		    setTimeout(function(){
		        // do something after 1000ms (or same as animation duration)
		        $('.slider div').removeClass('moving');
		    },3000);
		}

		current_post = post;
	});
});