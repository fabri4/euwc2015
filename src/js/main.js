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

    //////////     PROGRESSBAR       ////////////

    $(".b-progressbar").each(function(){
        var $this = $(this);
        var widthValue = $this.data("width");
        $this.css("width", widthValue + "%");
        $this.find("i").html(widthValue + "%");
        if (widthValue < 7) {
            $this.find("strong").css({
                "left": "0",
                "right": "auto"
            });
        }
    });
});