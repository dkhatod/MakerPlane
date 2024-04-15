
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var newBackgroundSize = 50 + scrollPosition / 5 + '%'; /* Adjust the divisor to control the speed of shrinking */
    document.querySelector('.scroll-container').style.backgroundSize = newBackgroundSize;

    var opacity = Math.min(0.5, scrollPosition / 1000); /* Adjust the divisor to control the speed of fading */
    document.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
    
});

jQuery(document).ready(function(){
    // Check if the device is a mobile device
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Function to handle parallax effect
    function parallaxScroll() {
        if (!isMobile) { // Only apply parallax effect on non-mobile devices
            var $objWindow = $(window);
            $('div[data-type="background"]').each(function(){
                var $bgObj = $(this);
                var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
                var coords = '100% ' + yPos + 'px';
                $bgObj.css({ backgroundPosition: coords });
            });
        }
    }

    // Call the parallaxScroll function on page load
    parallaxScroll();

    // Call the parallaxScroll function when scrolling
    $(window).scroll(parallaxScroll);
});
