$(function() {

	$("#post-list button").click(function() {
		var post = parseInt($( this ).attr('post'));

		var left = 100 * (post-1);	
		$('.posts').css("left", "-"+left+"%");
		$('.posts div').toggleClass('moving');



	    setTimeout(function(){
	        // do something after 1000ms (or same as animation duration)
	        $('.posts div').removeClass('moving');
	    },3000);
	});
});