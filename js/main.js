$(function(){

    var s = skrollr.init();

    // Add nav toggle class
    $('.toggle-nav').click(function(){
        $('body').toggleClass('nav-open');
    });

    $('.more').click(function(){
        $(this).closest('.project').find('.project-more').toggleClass('open');
    });


});
