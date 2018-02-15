var slide = 1;
var  slideBar = $('#slider').children().length;
var translateWidth = 0;
var slideInterval = 15000;
var navButoonId = 0;
$(document).ready(function () {
    $(document).ready(function() {
        $(".transp").wrapInner('<div>').children().addClass('content');
        $(".transp .content").before('<div>').prev().addClass('transparency');
    });
    var switchInterval = setInterval(nextSlide, slideInterval);
    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    },function () {
        switchInterval = setInterval(nextSlide,slideInterval);
    });
/*    $('#up-slide-buttons').click(function () {
        nextSlide();
    });
    $('#down-slide-buttons').click(function () {
        prevSlide();
    });*/
    $('.down-nav-buttons').click(function () {
        navButoonId = $(this).index();
        if (navButoonId + 1 !== slide) {
            translateWidth = -$('#viewport').width() * (navButoonId);
            $('#slider').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slide = navButoonId + 1;
        }
    });
});
function nextSlide(){
    if (slide === slideBar || slide <= 0 || slide > slideBar) {
        $('#slider').css('transform', 'translate(0, 0)');
        slide = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slide);
        $('#slider').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slide++;
    }
}
function prevSlide() {
    if (slide === 1 || slide <= 0 || slide > slideBar){
        translateWidth = -$('#viewport').width() * (slideBar - 1);
        $('#slider').css({
            'transform': 'translate(' + translateWidth + 'px,0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slide = slideBar;
    }
    else   {
        translateWidth = -$('#viewport').width() * (slide - 2);
        $('#slider').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slide--
    }
}
/*
$(window).on('scroll', function() {
    var scrollCoef = 0.0035;

    $('#container').css({
        opacity:$(window).scrollTop() * scrollCoef - 0.2
    })
});*//**/
$(document).ready(function(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed:1000,
    });
});
