/* ============ PRELOADER START =================== */
var preloader = document.getElementById("loading");
var body = document.querySelector("body");
var html = document.querySelector("html");

  preloader.style.display = "none";
  body.classList.remove("no-scroll-y");
  body.classList.add("no-scroll-x");
  html.classList.add("no-scroll-x");
  html.classList.remove("overflow-no-yy");



    $('.slider_responsive').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      centerpadding: 24,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    



// DEFINE SLICK SLIDER
$(".slick_slider1").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4.3,
  slidesToScroll: 1,
  centerMode: true,
  autoplaySpeed: 1800,
  centerPadding: "60px",
  autoplay: false,
  responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "",
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "",
      },
    },
  ],
});
// ===================== BACK TO TOP =======================

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});



// DEFINE AOS LINK===========================================
AOS.init({
  duration: 400,
  once: true,
});
$(".hero_slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  slidesToShow: 6,
  dots: false,
  slidesToScroll: 1,
  arrows: false,
  cssEase: "linear",
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});