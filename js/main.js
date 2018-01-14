$(document).ready(function() {
    if ($('.mixer').length) {
        var mixer = mixitup('.mixer');
    }

    $('body').css('margin-top', $('.navbar').outerHeight());

    $('.overlay').addClass('overlay-hidden');
    $('.sidestory-toggle').click(function() {
        var overlay = $(this).parent().next('.overlay');

        overlay.toggleClass('overlay-hidden');
        overlay.toggleClass('active');
        $(this).children('span').toggleClass('active');
        $(this).parent().toggleClass('active');
        $('body').toggleClass('overlay-active');
        // checkIfInView(overlay);
        $('body').append('<div class="close-overlay"></div>');
    });

    $('.overlay').click(function(e) {
        e.stopPropagation();
    });

    $(document).on('click', '.close-overlay', function(event) {
        $('.overlay').addClass('overlay-hidden');
        $('body').removeClass('overlay-active');
        $('.sidestory-toggle span').removeClass('active');
        $('.sidestory').removeClass('active');
        $('.overlay').removeClass('active');
        $('.close-overlay').remove();
        $('.menu').removeClass('active');
        $('.nav-toggle').removeClass('active');
    });

    $(window).scroll(function(event) {
        var header = $('header').outerHeight();

        if ($(window).scrollTop() > header) {
            $('#btt').fadeIn();
        } else {
            $('#btt').fadeOut();
        }
    });

    $('#btt').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    });

    $('.nav-toggle').click(function() {
        $('.menu').toggleClass('active');
        $('.nav-toggle').toggleClass('active');
        $('body').append('<div class="close-overlay"></div>');
        $('body').toggleClass('overlay-active');
    });

    $('.slider').each(function() {
        $(this).children('div').first().addClass('active');
    });
    $('.toggle-next').click(function() {
        var current = $(this).siblings('div').children('.active');
        current.removeClass('active');
        if (current.next().length) {
            current.next().addClass('active');
        } else {
            $(this).siblings('div').children().first().addClass('active');
        }
    });
    $('.toggle-prev').click(function() {
        var current = $(this).siblings('div').children('.active');
        current.removeClass('active');
        if (current.prev().length) {
            current.prev().addClass('active');
        } else {
            $(this).siblings('div').children().last().addClass('active');
        }
    });

    $('.togglable div').each(function(){
        if(!$(this).data('toggler')){
            $(this).hide();
        }
    });
    $('.togglable:first-of-type div[data-toggler="true"]').siblings().show();

    $('div[data-toggler="true"]').click(function(){
        $(this).siblings().slideToggle();

        // if(!$(this).siblings().is(':visible')){
        //     $('div[data-toggler="true"]').siblings().slideUp();
        //     $(this).siblings().slideDown();
        // }
    });

    $('.country-block div:not(.world)').addClass('hidden');
    $('.indexes span.world').show();

    $('#map g').click(function(){
        var c = $(this).attr('id');
        $('#map g').removeClass('active');
        $(this).addClass('active');
        $('.country-block div:not(.hidden)').addClass('hidden');
        $('.country-block .'+c).removeClass('hidden');
        $('.bar').each(function(){
            var b = $(this).find('.country');
            var info = b.data(c);
            b.css('width', info+'%');
            b.attr('class', '')
            b.attr('class', c + ' fill country');
            if(b.data(c+'-number')){
                $(this).find('.number').text(b.data(c+'-number'));
            } else{
                $(this).find('.number').text(info);
            }
        });
        $('.indexes .countries span').hide();
        $('.indexes .countries .'+c).show();
    });
});

function checkIfInView(element) {
    var elTop = element.offset().top;
    var elBottom = element.offset().top + element.outerHeight();
    var vpBottom = $(window).scrollTop() + $(window).height();
    var vpTop = $(window).scrollTop();

    if ((vpBottom >= elTop) && (vpTop <= elBottom)) {
        $('body').animate({
            scrollTop: elTop - element.outerHeight() / 2
        }, 100);
    }
}
