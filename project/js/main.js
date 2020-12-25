$(function () {

    'use strict';

    // hide css spinner
    $('.loader-me').fadeOut(800, function () {
        $('body').css('overflow', 'auto');
    });

    // start wow js
    new WOW().init();
    // header height set by js
    $('.header').height($(window).height());

    // on click in the button-up page scroll to top
    $('.button-up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // add active link on click & on scroll to his block
    $('.navbar-slide .links li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // add active link on links in event about
    $('.btns-show li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + $(this).data('info')).addClass('active').siblings().removeClass('active');
    });
    // add active link on links in scheudels
    $('.scheudels .btns-parent div div ul li').on('click', function () {
        console.log('run');
        $(this).addClass('active').siblings().removeClass('active');
        $('.scheudels .parent-divs').removeClass('active').fadeOut();
        $($(this).data('change')).addClass('active').fadeIn();
    });
    // scroll To the block that it contact with the same link
    $('.navbar-slide .links li').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    // button on the header scroll to div on click
    $('.header .icon-down i').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.about-event').offset().top
        }, 1500);
    });

    // navbar slider
    $('.navbar-slide').css('left', -$('.navbar-slide').innerWidth());
    $('.btn-navbar').on('click', function () {
        $(this).find('i').toggleClass('fa-bars fa-times');
        $('.navbar-slide').toggleClass('navbar-collapsed');
        $('.navbar-slide').animate({
            'left': ($('.navbar-slide').hasClass('navbar-collapsed')) ? 0: -$('.navbar-slide').innerWidth()
        }, 500);
    });

    // window on scroll make many functions
    $(window).on('scroll', function () {
        // add active link on links in navbar when window is scroll
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockId = $(this).attr('id');
                $('.navbar-slide .links li').removeClass('active');
                $('.navbar-slide .links li[data-scroll="' + blockId + '"]').addClass('active');
            }
        });

        // counter start at window scroll to the timer offset
        if ($(window).scrollTop() > 1880) {
            $('.count').countTo();
            $('.timer .timer-show div span').removeClass('count');
        }

        // button scroll to up
        if ($(window).scrollTop() > 700) {
            $('.button-up').addClass('up-show');
        } else {
            $('.button-up').removeClass('up-show');
        }
    });

    // animated overlay on speakers images
    $('.speaker-info .overlay').css('top', -$('.speaker-info .overlay').innerHeight());

    // animated carousel to they say block
    $('.say .btns-say-parent ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.say .say-info').fadeOut().removeClass('active');
        $($(this).data('show')).addClass('active').fadeIn();
    });
})

// the timer which in the header block
window.setInterval(function(){
    var d = new Date();
    var x = document.getElementById("hours");
    var a = document.getElementById("minutes");
    var v = document.getElementById("seconds");
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    x.innerHTML = h;
    a.innerHTML = m;
    v.innerHTML = s;
  }, 1000);