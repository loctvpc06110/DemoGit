$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        prevArrow:
        `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
    });
  });

  