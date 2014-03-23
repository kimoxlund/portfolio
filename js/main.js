$(function(){



    // Add nav toggle class
    $('.toggle-nav').click(function(){
        $('body').toggleClass('nav-open');
    });

    var currentProject = 1;

    var numProjects = $('.screen').length;

    var scrollPercentage = 1;

    $('.btn').click(function(){
        var visibility = $(this).data('cat');

        if(visibility === 'web'){
            $('.motion').remove();
        } else if(visibility === 'video') {
            $('.web').remove();
        }

        $(".screen").each(function(i){

            $(this).attr("style","z-index: " + (numProjects - i));
            $(this).attr("data-" + (i * 100) + "p","opacity:1; display: block;");
            $(this).attr("data-" + ((i * 100) + 70) + "p","opacity:0; display: none;");

        });

        var s = skrollr.init();
    });
});
