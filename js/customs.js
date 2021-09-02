
$(document).ready(function(){
    $(".slider-active").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });


      $(".project-active").owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        },
      });


      $(".blog-active").owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 1,
          },
        },
      });


      $(".brand-active").owlCarousel({
        loop: true,
        margin:10,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        },
      });

      $('.just-play').magnificPopup({
        type: 'iframe'
        // other options
      });


  });
  