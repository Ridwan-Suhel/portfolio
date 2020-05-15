$(document).ready(function () {

    /*-------------------------------------------------------------------------------
        meanmenu 
    -------------------------------------------------------------------------------*/
    $(function () {
        var navMain = $("#nav-main");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });

    $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });




    //    $('.top-nav-menu li').click(function(){
    //        $('.top-nav-menu').css({
    //            'display':'none',
    //        })
    //        $(".mean-bar a").removeClass("meanclose");
    //    });
    /*-------------------------------------------------------------------------------
        tooltip 
    -------------------------------------------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();


    /*------------------------------------------------------------------------------- 
        sticky menu
    -------------------------------------------------------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });


    var nav_offset_top = $('header').height() + 10;
    /*-------------------------------------------------------------------------------
    	 Navbar Fixed 
    -------------------------------------------------------------------------------*/

    function navbarFixed() {
        if ($('.menu-nav').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".menu-nav").addClass("navbar_fixed");
                } else {
                    $(".menu-nav").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    /*-------------------------------------------------------------------------------
        owl top slider 
    -------------------------------------------------------------------------------*/

    $('.hero-right .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    /*-------------------------------------------------------------------------------
        owl testimonial slider 
    -------------------------------------------------------------------------------*/

    $('.testi-active .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*-------------------------------------------------------------------------------
        owl mb version slider 
    -------------------------------------------------------------------------------*/

    $('.mb-slider .mb-slider-active .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 6500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
        /*-------------------------------
        text-notify for demo website
        --------------------------------*/
    $(".clse").click(function(){
        $(".text-notify").fadeOut(300);
    })
    /*-------------------------------------------------------------------------------
    portfolio isotope 
    -------------------------------------------------------------------------------*/

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for portfolio menu active class & mean nav active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /*-------------------------------------------------------------------------------
        scroll to top
    -------------------------------------------------------------------------------*/
    //    $(".scroll_top .scroll").click(function () {
    //        $("html, body").animate({
    //            "scrollTop": 0
    //        }, 500);
    //    });
    //
    //    $(window).scroll(function () {
    //        if ($(window).scrollTop() > 400) {
    //            $(".scroll").fadeIn(500);
    //        } else($(".scroll").fadeOut(500))
    //    })

    /*-------------------------------------------------------------------------------
        one page nav jQ start 
    -------------------------------------------------------------------------------*/
    var top_offset = $('.header-hero').height() - 585;
    $('.nav-right nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    /*-------------------------------------------------------------------------------
        smooth scroll jQ start 
    -------------------------------------------------------------------------------*/

    $('.mean-nav ul li a').smoothScroll({
        offset: -50
    });

     $('.mean-nav ul li .contact').smoothScroll({
        offset: 100
    });
   
    $('.nav-left .logo,.footer-section a').smoothScroll({
        offset: -50
    });

    $('.cta-btn').smoothScroll({
        offset: 100
    });
    /*-------------------------------------------------------------------------------
        wow js 
    -------------------------------------------------------------------------------*/
    new WOW().init();

    /*-------------------------------------------------------------------------------
      FAQ JQ 
    -------------------------------------------------------------------------------*/
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.article-title');
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
            };
        }
        var accordion = new Accordion($('.accordion-container'), false);
    });

})
