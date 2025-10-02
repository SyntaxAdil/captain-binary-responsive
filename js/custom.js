$(function () {
  AOS.init({
  offset: 0,    
  
  easing: 'ease-in-out',
  once: false   
});



  const navTogBtn = $(".navbar-toggler-custom-icon");

  $(".navbar-toggler").click(function () {
    if (navTogBtn.hasClass("fa-bars")) {
      navTogBtn.removeClass("fa-bars").addClass("fa-xmark");
    } else {
      navTogBtn.removeClass("fa-xmark").addClass("fa-bars");
    }
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").css("background", "#0d1224");
    } else {
      $(".navbar").css("background", "transparent");
    }
  });
//   owl
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    dots:false,
    autoplay:false,
    smartSpeed:600,
    navText: [
        '<button class="owl-btn owl-prev-btn">আগে</button>',
        '<button class="owl-btn owl-next-btn">পরে</button>'
    ],
    responsive:{
        0: { items:1, center:false, nav:false, margin:5 },
        576:{ items:1, center:true, nav:false, margin:8 },
        768:{ items:3, center:false, margin:10,nav:true },
        992:{ items:3, center:false, margin:10,nav:true },
        1200:{ items:3, center:false, margin:10,nav:true }
    }
});




});


