/*
-------------------------------------------------------------------------
* Template Name    : Busiapp - Multi Purpose Html5 Landing Page      *
* Author           : ParExcellence                                   *
* Version          : 1.0.0                                           *
* File Description : Main JS file of the template                    *
*------------------------------------------------------------------------
*/
$(document).ready(function () {

    /*----MAIN SLIDER-----*/
    $('.main-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                nav: false,
                dots: true
            },
            1000: {
                items: 1,
                nav: false,
                dots: true
            }
        }
    });

    /*----CLIENTS SLIDER-----*/
    $('.clients-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 2,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                nav: false,
                dots: true
            },
            991: {
                items: 2,
                nav: false,
                dots: true
            }
        }
    });
    /*----TEAM SLIDER-----*/
    $('.team-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 2,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            480: {
                items: 2,
                nav: false,
                dots: true
            },
            767: {
                items: 3,
                nav: false,
                dots: true
            },
            992: {
                items: 2,
                nav: false,
                dots: true
            }
        }
    });
    /*----MAGIC POPUP-----*/
    if (('.filters-content').length > 0) {
        $('.filters-content').each(function () {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }
    /*----ISOTOP JS-----*/
    var length = $('.portfolio-section').length;
    if (length >= 1) {
        $('.filters ul li').click(function () {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $grid.isotope({
                filter: data
            })
        });

        var $grid = $(".grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        });
    }
    /*----ONSCROLL JS-----*/
    $(window).on("scroll", function () {
        "use strict";
        var sections = $('section'),
            nav = $('.navbar-nav'),
            nav_height = nav.outerHeight() + 25;
        $(window).scrollTop() >= 20 ? $("nav").addClass("sticky-header") : $(".sticky").removeClass("sticky-header");
        /*----ON SCROLL CHANGE ACTIVE MENU-----*/
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li').removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
            }
        });
        /*----COUNTER-UP JS-----*/
        var a = 0;
        (function ($) {
            var length = $('#counter').length;
            if (length >= 1) {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            });
                    });
                    a = 1;
                }
            }

        })(jQuery);
    }), $(".one-page-scroll .nav-item a").on("click", function (o) {
        var t = $(this);
        $('.nav-item').removeClass('active');
        $(t).parent().addClass('active');
        $('body').removeClass('openmenu');
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
        }, 1500, "easeInOutExpo"), o.preventDefault()
    }), $(document).on("click", ".navbar-collapse.show", function (o) {
        $(o.target).is("a") && $(this).collapse("hide")
    }), $(window).on("scroll", function () {
        $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
    }), $(".back_top").on("click", function () {
        return $("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    });
    /*----MOBILE-MENU OVERLAY JS-----*/
    (function ($) {
        $('.navbar-toggler').on("click", function () {
            $('body').addClass('openmenu');
        });
        $('.menu-overlay').on("click", function () {
            $('body').removeClass('openmenu');
            $('.navbar-collapse').removeClass('show');
        });
    })(jQuery);
    /*----ACCORDIAN JS-----*/
    (function ($) {
        $(".accordion-card").click(function () {
            if ($(this).hasClass('active')) {
                $('.accordion-card').removeClass('active');
                $(this).removeClass('active')
            } else {
                $('.accordion-card').removeClass('active');
                $(this).addClass('active')
            }
        });
    })(jQuery);

});
/*----COUNTER-----*/
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({
        count: settings.start
    }).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({
    end: 500,
    duration: 3000
});
$('#number2').jQuerySimpleCounter({
    end: 1000,
    duration: 3000
});
$('#number3').jQuerySimpleCounter({
    end: 50,
    duration: 2000
});
$('#number4').jQuerySimpleCounter({
    end: 8899,
    duration: 2500
});

/*----WOW ANIMATION-----*/

const apiUrl = 'http://localhost:3000/send-email';

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('comments').value;

    const sendEmail = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert('Por favor, complete o reCAPTCHA.');
        return false;
    }

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendEmail),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta da API:', data);
        alert('Formulário enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
}


(function ($) {
    var length = $('.wow').length;
    if (length >= 1) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
        });
        wow.init();
    }
})(jQuery);
const container = document.getElementById("circles");
const repeatCount = 20; 

for (let i = 0; i < repeatCount; i++) {
  const span = document.createElement("span");
  span.className = "mdi mdi-circle";
  container.appendChild(span);
}
