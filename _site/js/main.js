$(document).ready(function(){
    if($('.mixer').length){
        var mixer = mixitup('.mixer');        
    }

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

    $('.nav-toggle').click(function(){
        $('.menu').toggleClass('active');
        $('.nav-toggle').toggleClass('active');
    });

    $('.slider').each(function(){
        $(this).children('div').first().addClass('active');
    });
    $('.toggle-next').click(function(){
        var current = $(this).siblings('div').children('.active');
        current.removeClass('active');
        if (current.next().length){
            current.next().addClass('active');
        } else {
            $(this).siblings('div').children().first().addClass('active');
        }
    });
    $('.toggle-prev').click(function(){
        var current = $(this).siblings('div').children('.active');
        current.removeClass('active');
        if (current.prev().length){
            current.prev().addClass('active');
        } else {
            $(this).siblings('div').children().last().addClass('active');
        }
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
