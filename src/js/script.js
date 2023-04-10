$(".cars-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: false,
  autoplay: true,
  verticalSwiping: true,
  centerMode: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        verticalSwiping: false
      }
    }
  ]
});

$('#reviews-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        verticalSwiping: false
      }
    }
  ]
});
