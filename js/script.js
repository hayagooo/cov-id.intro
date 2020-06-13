$(document).ready(function() {
    AOS.init();
    $('.trackers, .news, .teams').slick({
        arrow: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 12000,
        slidesToShow: 1,
        slidestoScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidestoScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidestoScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.span-email').click(function() {
        var val = $(this).text();
        document.execCommand("copy")
    });
    let ww = $(window).width();
    if(ww >= 1220) {
        $('.search-toggle').click(function() {
            $('.search-nav-hide').toggleClass('search-nav-show')
            $('.form-search-nav').focus()
            $('.search-toggle svg').toggleClass('text-danger')
            $('.navbar').addClass('bg-white');
            $('.nav-link').removeClass('text-white').addClass('text-dark');
            $('#title_nav').addClass('clr-red').removeClass('text-white');
        });
    }
    if(ww < 1220) {
        $('.search-toggle svg').addClass('text-danger')
        $('.search-toggle').click(function() {
            $('.search-small-nav').slideToggle(500, "linear")
            $('.form-search-nav-small').focus()
            $('.search-toggle svg').toggleClass('text-dark')
        });
    }
    $(window).resize(function() {
        var windowsize = $(window).width();
        if(windowsize < 1219) {
            location.reload();
        }
    });
    var top  = window.pageYOffset || document.documentElement.scrollTop
    var windowsize = $(window).width();
    if(windowsize < 1219) {
        $('.navbar').addClass('bg-white')
    } else {
        if(top <= 22) {
            $('.navbar').removeClass('shadow-sm bg-white').addClass('text-white');
            $('.nav-link').addClass('text-white').removeClass('text-dark');
            $('#title_nav').addClass('text-white');
        } else {
            $('.navbar').addClass('shadow-sm bg-white').removeClass('text-white');
            $('.nav-link').addClass('text-dark').removeClass('text-white');
        }
    }
    $(window).scroll(function() {
        var windowsize = $(window).width();
        var top  = window.pageYOffset || document.documentElement.scrollTop;
        if(windowsize < 1219) {
            if(top <= 70) {
                $('.navbar').addClass('bg-white border-bottom').removeClass('shadow-sm');
                $('.nav-link').addClass('text-dark');
                $('#image_nav').addClass('image_normal').removeClass('image_transform');
                $('#title_nav').removeClass('title_hide').addClass('title_show');
            } else {
                $('.navbar').addClass('bg-white shadow-sm').removeClass('border-bottom');
                $('.nav-link').addClass('text-dark').removeClass('text-white');
                $('#title_nav').removeClass('title_show').addClass('title_hide');
                $('#image_nav').addClass('image_transform').removeClass('image_normal');
            }
        } else {
            if(top <= 200) {
                $('.go_top').addClass('go_top_hide').removeClass('go_top_show animate__animated animate__shakeX');
            } else {
                $('.go_top').addClass('go_top_show animate__animated animate__shakeX').removeClass('go_top_hide');
            }
            if(top <= 70) {
                $('.navbar').removeClass('shadow-sm bg-white animate__animated animate__fadeInDown').addClass('text-white');
                $('#title_nav').removeClass('title_hide').addClass('title_show text-white');
                $('#image_nav').addClass('image_normal').removeClass('image_transform');
                $('.nav-link').addClass('text-white').removeClass('text-dark');
            } else {
                $('.navbar').addClass('shadow-sm bg-white animate__animated animate__fadeInDown animate__faster').removeClass('text-white');
                $('#image_nav').addClass('image_transform').removeClass('image_normal');
                $('#title_nav').removeClass('title_show').addClass('title_hide');
                $('.nav-link').addClass('text-dark').removeClass('text-white');
            }
        }
    });
    new TypeIt('#typeit_corona', {
        speed: 250,
        loop: true,
    }).type("Dirumah saja", {delay: 300})
    .pause(3000)
    .delete()
    .type("Selalu memakai masker", {delay: 300})
    .pause(3000)
    .delete(6)
    .type("Handsinitizer", {delay: 300})
    .pause(3000)
    .delete()
    .type("Menggunakan protokol kesehatan", {delay: 300})
    .pause(5000)
    .delete()
    .go();

    $('#toggler-nav').click(function() {
        if(!($('navbar-collapse').hasClass('show'))) {
            $('.burger-nav div:nth-child(1)').toggleClass('burger-cross1');
            $('.burger-nav div:nth-child(2)').toggleClass('burger-cross2');
        }
    });

    // Animate
    (function() {
        var container = document.getElementById("jumbotron-p"),
            inner = document.getElementById("jumbotron-id"),
            helper = document.getElementById("helper"),
            img1 = document.getElementById("img_lockdown-parallax");
        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };
    mouse.setOrigin(container);
    var counter = 0;
    var updateRate = 1;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };
    
    var onMouseEnterHandler = function(event) {
        helper.className = "";
        update(event);
    };
    
    var onMouseLeaveHandler = function() {
        inner.style = "";
        helper.className = "hidden";
    };
    var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
        displayMousePositionHelper(event);
    };
    var update = function(event) {
        mouse.updatePosition(event);
    };
    
    var displayMousePositionHelper = function(event) {
        var e = event || window.event;
        img1.style = "top:"+(e.clientY-container.offsetTop)/(-55)+"px !important;"
                    + "left:"+(e.clientX-container.offsetLeft)/(-55)+"px !important;";
    };
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
    })
    ();
    // End Animate

    // Berita script
    
    $('.card-berita img, .tools').mouseenter(function() {
        $('.card-berita img').addClass('img_berita-opacity5');
        $('.tools').removeClass('tools-hide').addClass('tools-show animate__animated animate__bounce');
    });
    $('.card-berita img, .tools').mouseleave(function() {
        $('.card-berita img').removeClass('img_berita-opacity5');
        $('.tools').removeClass('tools-show animate__animated animate__bounce').addClass('tools-hide');
    });
    $('.card-body').mouseenter(function() {
        $('.card-berita .card-body .card-text').addClass('animate__animated animate__fadeInUp animate__faster');
    });
    $('.card-body').mouseleave(function() {
        $('.card-berita .card-body .card-text').removeClass('animate__animated animate__fadeInUp animate__faster');
    });

    // End berita script
    

});