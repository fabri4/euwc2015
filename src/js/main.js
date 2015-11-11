$(document).ready(function() {

    //////////     MENU       ////////////

    var $header = $(".b-header"),
        $menulink = $(".b-menu__link"),
        $headerMenu = $(".b-header__nav");
    $menulink.on("click", function() {
        $header.add($headerMenu).toggleClass("active");
    });

    if($(window).scrollTop() > 50) {
        $header.addClass('b-header--scroll');
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $header.addClass('b-header--scroll');
        }
        else {
            $header.removeClass('b-header--scroll');
        }
    });


    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $header.add($headerMenu).removeClass("active");
                return false;
            }
        }
    });
});