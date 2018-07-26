var WM = (function($) {
  'use strict';

  var scrollClick = function() {
    var button = $('.slider__scroll');
      button.on('click', function(){
        var offset = -100;
        $('html, body').animate({
            scrollTop: $(".scroll").offset().top + offset
        }, 500);
      });
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var $win = $(window);
        var winH = $win.height() - 60;   // Get the window height.

        if (scroll >= winH) {
            $(".navigation").addClass("black");
        } else {
            $(".navigation").removeClass("black");
        }
    });
  };

  var rotateClick = function() {
    var buttonRight = $('#rotateLeft');
    var buttonLeft = $('#rotateRight');
    var item1 = $('.slider-menu-pancakes');
    var item2 = $('#sl');
    var item3 = $('#slk');
    var sl = $('#sl-1');
    var slk = $('#slk-2');
    buttonRight.on('click', function(){
      item1.addClass('rotate-1');
      item2.addClass('rotate-2');
      item3.addClass('rotate-2');
      $(this).find('.slider__scroll-right-line').removeClass('active');
      $(this).find('.slider__scroll-right').removeClass('active');
      buttonLeft.find('.slider__scroll-left-line').addClass('active');
      buttonLeft.find('.slider__scroll-left').addClass('active');
      sl.removeClass('active');
      slk.addClass('active');
    });
    buttonLeft.on('click', function(){
      item1.removeClass('rotate-1');
      item2.removeClass('rotate-2');
      item3.removeClass('rotate-2');
      $(this).find('.slider__scroll-left-line').removeClass('active');
      $(this).find('.slider__scroll-left').removeClass('active');
      buttonRight.find('.slider__scroll-right-line').addClass('active');
      buttonRight.find('.slider__scroll-right').addClass('active');
      slk.removeClass('active');
      sl.addClass('active');
    });
  }
  var paginationFunction = function(){
    $('#pagination').twbsPagination({
    totalPages: 35,
    visiblePages: 10,
    onPageClick: function (event, page) {
         var layout = [
           '<div class="media">' +
           '<div class="media__image"> <img src="../img/blog-image.jpg"/></div>' +
           '<div class="media__holder">' +
              '<div class="media__date">Januar 23, 2014</div><div class="media__title">OTVOREN KEOPS U UŠĆE SHOPPING CENTRU</div><div class="media__text">Od petka, 28. marta 2014. godine, otvorena je Keops palačinkarnica u Ušće shopping centru. Jedno od najomiljenijih mesta u Beogradu za okupljanje...</div>',
           '</div>',
           '</div>'
         ];
         $('#page-content').html(layout)
     }
  });
  }
  var tabs = function(){
    $('.tab_content').hide();
      $('.tab_content:first').show();
      $('.tabs li:first').addClass('active');
      $('.tabs li').click(function(event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();

        var selectTab = $(this).find('a').attr("href");
        event.preventDefault();

        $(selectTab).fadeIn();
      });
  }
  var hover = function(){
    $("#hoverShow").hover(
      function () {
       $('.dropdown').css('display','block');
      },
      function () {
       $('.dropdown').css('display','none');
      }
      );
  }
  var trigger = function(){
    var button = $('.trigger');
    var close = $('.close');
    button.on('click', function(){
      $('.mobile-navigation').css('display','block');
    });
    close.on('click', function(){
      $('.mobile-navigation').css('display','none');
    });
     if ($(window).width() < 1024) {
       var closeMobile = $('.closeMobile');
       closeMobile.on('click', function(){
         $('.mobile-navigation').css('display','none');
       });

     }
  }
  var ready = function() {
    scrollClick();
    rotateClick();
    paginationFunction();
    tabs();
    hover();
    trigger();
  };

  // Only expose the ready function to the world
  return {
      ready: ready
  };
})(jQuery);

jQuery(WM.ready);
