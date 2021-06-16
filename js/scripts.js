/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });





    $(".portfolio-item").click(function(){
      var link = $(this).attr('id');

      switch (link) {
        case "aquaculturesoft":
          window.open('https://aquaculturesoft.com/', '_blank');
          break;
      
          case "iglesiatransversal":
          window.open('https://iglesiatransversal.com/', '_blank');
          break;

          case "colegiovidanueva":
          window.open('https://colegiovidanueva.com/', '_blank');
          break;

          case "fundacion":
          window.open('http://fundulcehogar.com/', '_blank');
          break;

          case "arango":
          window.open('https://arangocreative.com/', '_blank');
          break;

          case "accseguridad":
          window.open('https://accseguridad.com/talento', '_blank');
          break;

          case "almacen":
          window.open('https://www.almacenelingeniero.com/app/', '_blank');
          break;

          case "victoria":
          window.open('https://victoriadelacruz.com/', '_blank');
          break;

          case "batatabit":
          window.open('batatabit/index.html', '_blank');
          break;

          case "simondice":
          window.open('simondice/index.html', '_blank');
          break;

          case "myebooktransfer":
          window.open('https://myebooktransfer.com/', '_blank');
          break;

          case "kohl":
          window.open('https://kohlcolombia.com/', '_blank');
          break;

          //paginas
        
      }

    });

  
  })(jQuery); // End of use strict
  