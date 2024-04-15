
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var newBackgroundSize = 50 + scrollPosition / 5 + '%'; /* Adjust the divisor to control the speed of shrinking */
    document.querySelector('.scroll-container').style.backgroundSize = newBackgroundSize;

    var opacity = Math.min(0.5, scrollPosition / 1000); /* Adjust the divisor to control the speed of fading */
    document.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
    
});

jQuery(document).ready(function(){
	$objWindow = $(window);
	$('div[data-type="background"]').each(function(){
		var $bgObj = $(this);
		$(window).scroll(function() {
			var yPos = -($objWindow.scrollTop() / $bgObj.data('speed')); 
           
			var coords = '100% '+ yPos + 'px';
            // Animate the background
			 $bgObj.css({ backgroundPosition: coords });
           
		});
		
	});
});
