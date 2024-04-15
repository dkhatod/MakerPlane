window.onload = function() {
    var scrollPosition = window.scrollY;
    var newBackgroundSize = 50 + scrollPosition / 5 + '%'; /* initial page load */
    document.querySelector('.scroll-container').style.backgroundSize = newBackgroundSize;
  };


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var newBackgroundSize = 50 + scrollPosition / 5 + '%'; /* shrink */
    document.querySelector('.scroll-container').style.backgroundSize = newBackgroundSize;
    
});

jQuery(document).ready(function(){
    // Check if the device is a mobile device
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    

    function parallaxScroll() {
        if (!isMobile) { 
            var $objWindow = $(window);
            $('div[data-type="background"]').each(function(){
                var $bgObj = $(this);
                var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
                var coords = '100% ' + yPos + 'px';
                $bgObj.css({ backgroundPosition: coords });
            });
        }
    }
    
    // Calls parallaxScroll function on page load & when scrolling
    parallaxScroll();
    $(window).scroll(parallaxScroll);
});
