$(function(){

    // Add nav toggle class
    $('.toggle-nav').click(function(){
        $('body').toggleClass('nav-open');
    });

    var numProjects = $('.screen').length;

    $(".screen").each(function(i){

        $(this).attr("style","z-index: " + (numProjects - i));
        $(this).attr("data-" + (i * 100) + "p","opacity:1; display: block;");
        $(this).attr("data-" + ((i * 100) + 70) + "p","opacity:0; display: none;");

    });

    $('.open-project').click(function(){
        $('.individual-project').toggleClass('project-open');
    });
});
