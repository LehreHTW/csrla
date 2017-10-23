$(document).ready(function(){
    $('.sidestory-toggle').click(function(){
        var overlay = $(this).parent().next('.overlay');

        overlay.fadeToggle();
        overlay.toggleClass('active');
        $(this).children('span').toggleClass('active');
        $(this).parent().toggleClass('active');
        $('body').toggleClass('overlay-active');
        checkIfInView(overlay);

        // overlay.isOnScreen();
    });
});

function checkIfInView(element){
    var elTop = element.offset().top;
    var elBottom = element.offset().top + element.outerHeight();
    var vpBottom = $(window).scrollTop() + $(window).height();
    var vpTop = $(window).scrollTop();

    if((vpBottom > elTop) && (vpTop < elBottom)){
        $('html,body').animate({scrollTop: elTop - element.outerHeight()/2}, 1000);
    }
}
