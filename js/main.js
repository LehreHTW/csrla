$(document).ready(function() {

    // initiate mixitup (for chapter page)
    if ($('.mixer').length) {
        var mixer = mixitup('.mixer', {
            controls: {
                toggleLogic: 'or'
            },
            multifilter: {
                enable: true // enable the multifilter extension for the mixer
            }
        });
    }

    // add margin top of nav height, so that navigation doesn't overlap content
    var navHeight = $('.navbar').outerHeight();

    $('body').css('margin-top', $('.navbar').outerHeight());

    // hide all overlays
    $('.overlay').addClass('overlay-hidden');

    // when sidestory toggle is clicked, open overlay and add classes for blurring and container for closing
    $('.sidestory-toggle').click(function() {
        var overlay = $(this).parent().next('.overlay');
        overlay.toggleClass('overlay-hidden');
        overlay.toggleClass('active');
        checkIfInView(overlay);
        $(this).children('span').toggleClass('active');
        $(this).parent().toggleClass('active');
        $('body').toggleClass('overlay-active');
        $('body').append('<div class="close-overlay"></div>');
    });

    // overlay closing action
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


    // face back to top button in and out based on scroll position
    $(window).scroll(function(event) {
        var header = $('header').outerHeight();

        if ($(window).scrollTop() > header) {
            $('#btt').fadeIn();
        } else {
            $('#btt').fadeOut();
        }
    });

    // animate scroll to top when back to top button is clicked
    $('#btt').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    });

    // open menu and toggle all the rest for blurring and closing
    $('.nav-toggle').click(function() {
        $('.menu').toggleClass('active');
        $('.nav-toggle').toggleClass('active');
        $('body').append('<div class="close-overlay"></div>');
        $('body').toggleClass('overlay-active');
    });

    // activate first slide in slider
    $('.slider').each(function() {
        $(this).children('div').first().addClass('active');
    });
    // load next image in slider on click
    $('.toggle-next').click(function() {
        var current = $(this).siblings('div').children('.active');
        current.removeClass('active');
        if (current.next().length) {
            current.next().addClass('active');
        } else {
            $(this).siblings('div').children().first().addClass('active');
        }
    });

    // load previous image in slider on click
    $('.toggle-prev').click(function() {
        var current = $(this).siblings('div').children('.active');
        current.removeClass('active');
        if (current.prev().length) {
            current.prev().addClass('active');
        } else {
            $(this).siblings('div').children().last().addClass('active');
        }
    });

    // Make Toggle-Divs in Forschungstagebuch
    $('.togglable > div').each(function(){
        if(!$(this).data('toggler')){
            $(this).hide();
        }
    });
    $('.togglable:first-of-type div[data-toggler="true"]').siblings().show();

    $('div[data-toggler="true"]').click(function(){
        $(this).siblings().slideToggle();
    });

    // hide all county-infos on home page, except world
    $('.country-block div:not(.world)').addClass('hidden');
    $('.indexes span.world').show();

    // show information of coutry based on SVG click, also update number in indexes.
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
	
	var myLazyLoad = new LazyLoad({
		elements_selector: ".lazy"
	});
});

// center element in viewport
function checkIfInView(element) {
    var elTop = element.offset().top;
    var elBottom = element.offset().top + element.outerHeight();
    var vpBottom = $(window).scrollTop() + $(window).height();
    var vpTop = $(window).scrollTop();
	
    if ((vpBottom >= elTop) && (vpTop <= elBottom)) {
        $('body').animate({
            scrollTop: elTop + element.outerHeight() / 2
        }, 100);
    }
}
