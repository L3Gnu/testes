$(document).ready(function(){
    var windowW = $(window).width();
    var windowH = $(window).height();
    var container = $('#container');
    var container = $('#container');
    var containerW = $(container).width();
    var containerH = $(container).height();
    
    positioning();
    loadImages();

    function loadImages(){
        $('.images').each( function(){
            $(this).append("<img src='images/"+ $(this).attr('id') +".jpg' />");
        });
        $('#slider').css('width', $('.images').width() * $('#slider').children().length)
    }
    function positioning(){
        container.css('top', windowH/2 - containerH/2);
        container.css('left', windowW/2 - containerW/2);
        $('.arrow').css('top', containerH/2 - $('.arrow').height()/2);
        $('#left').css('left', parseInt($('#left').css('left')) - parseInt($('#left').width()/2));
        $('#right').css('right', parseInt($('#right').css('right')) - parseInt($('#right').width()/2));
        $(window).resize(function(){
            var windowW = $(window).width();
            var windowH = $(window).height();
            container.css('top', windowH/2 - containerH/2);
            container.css('left', windowW/2 - containerW/2);
        });
    }
});