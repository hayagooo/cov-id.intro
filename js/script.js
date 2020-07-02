$(document).ready(function() {
    AOS.init();
    $('.trackers, .news, .teams').slick({
        arrows: false,
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

    $('#rekomend-shop').slick({
        arrows: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 11000,
        slidesToShow: 2,
        slidestoScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    });


    $('#rekomend-shop-profile').slick({
        arrows: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 11000,
        slidesToShow: 2,
        slidestoScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    });

    
    $('#rekomend-shop-detail').slick({
        arrows: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 11000,
        slidesToShow: 3,
        slidestoScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidestoScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidestoScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    $('#product-sold').slick({
        arrows: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 11000,
        slidesToShow: 2,
        centerMode: true,
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
                    slidesToShow: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    $('#shop-banner').slick({
        arrows: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidestoScroll: 1,
        centerMode: true,
        centerPadding: '10px'
    });
    
    $('#shop-preview').slick({
        arrows: false,
        slidestoScroll: 1,
        slidesToShow: 1,
        dots: false,
        speed: 300,
        autoplay: false,
        fade: true,
        asNavFor: '#preview-nav'
    }); 

    $('#preview-nav').slick({
        slidesToShow: 2,
        slidestoScroll: 1,
        asNavFor: '#shop-preview',
        dots: true,
        centerPadding: '10px',
        centerMode: true,
        focusOnSelect: true,
    });

    $('#kupon-slider').slick({
        slidesToShow: 1,
        slidestoScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 12000,
        arrows: true,
        speed: 300
    })
    new TypeIt('#typeit_corona', {
        speed: 250,
        loop: true,
    }).type("Dirumah saja", {delay: 300})
    .pause(3000)
    .delete()
    .type("Selalu memakai masker", {delay: 300})
    .pause(3000)
    .delete(6)
    .type("Hand sanitizer", {delay: 300})
    .pause(3000)
    .delete()
    .type("Menggunakan protokol kesehatan", {delay: 300})
    .pause(5000)
    .delete()
    .go();

    new TypeIt('#slogan-donasi', {
        speed: 250,
        loop: true,
    }).type("Menyenangkan..", {delay: 300})
    .pause(3000)
    .delete()
    .type('Membuat hidup berkah..', {delay: 300})
    .pause(3000)
    .delete(14)
    .type('sosialisme semakin meningkat', {delay: 300})
    .pause(3000)
    .delete()
    .go();

    $('#toggler-nav').click(function() {
        if(!($('navbar-collapse').hasClass('show'))) {
            $('.burger-nav div:nth-child(1)').toggleClass('burger-cross1');
            $('.burger-nav div:nth-child(2)').toggleClass('burger-cross2');
        }
    });


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


    let token = localStorage.getItem('user');
    if(token !== null && token !== undefined && token !== "" && token !== "null") {
        $('#btn-login').addClass('d-none')
        $('#btn-profil').removeClass('d-none')
    } else {
        $('#btn-login').removeClass('d-none')
        $('#btn-profil').addClass('d-none')
    }

});