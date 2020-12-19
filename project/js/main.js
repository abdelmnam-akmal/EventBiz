$(function () {

    'use strict';
    // header height set by js
    $('.header').height($(window).height());

    // add active link on click
    $('.navbar-slide .links li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.btns-show li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + $(this).data('info')).addClass('active').siblings().removeClass('active');
    });

    // scroll to div on click
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
})


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




