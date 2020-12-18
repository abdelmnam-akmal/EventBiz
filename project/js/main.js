$(function () {

    'use strict';
    // header height set by js
    $('.header').height($(window).height());

    // add active link on click
    $('.navbar-slide .links li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
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
})