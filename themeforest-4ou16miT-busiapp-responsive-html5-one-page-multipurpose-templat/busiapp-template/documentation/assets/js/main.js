/*
-------------------------------------------------------------------------
* Template Name    : tomillo - Multi Purpose Html5 Landing Page         *
* Author           : ParExcellence                                      *
* Version          : 1.0.0                                              *
* Created          : Feb 2020                                           * 
*------------------------------------------------------------------------
*/

/* ------------------------
    Table of Contents

  1.Predefined Variables
  2.Scrolling Animation
  3.Fixed Header
  4.Window load functions  

------------------------ */

"use strict";

/*------------------------------------
  1.Predefined Variables
--------------------------------------*/
var $window = $(window),
  $document = $(document),
  $body = $('body');
$.fn.exists = function () {
  return this.length > 0;
};



/*------------------------------------
  2.Scrolling Animation
--------------------------------------*/
function scrolling() {
    $('.nav-item a, .page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var hg = $('header').height();
        var scroll_h = $($anchor.attr('href')).offset().top - 50;
        $('html, body').stop().animate({
            scrollTop: scroll_h
        }, 1200);
        event.preventDefault();
    });
};


/*------------------------------------
  3.Fixed Header
--------------------------------------*/
function fxheader() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 600) {
      $('#header-wrap').addClass('fixed-header');
    } else {
      $('#header-wrap').removeClass('fixed-header');
    }
  });
};

/*------------------------------------
  4.Window load functions
--------------------------------------*/
$(document).ready(function () {
   scrolling(),
  fxheader();
});