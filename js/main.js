$(document).ready(function(){
    $('.sidestory-toggle').click(function(){
        $(this).parent().next('.sidestory-content').fadeToggle();
        $(this).toggleClass('active');
    });
});
