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
const owl = $('.owl-carousel').owlCarousel({
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

// Hide prev/next buttons on below medium devices when item 1 is showing
owl.on('changed.owl.carousel', function(event) {
    const currentItem = event.item.index;
    const windowWidth = $(window).width();

    // For devices below medium (< 768px)
    if (windowWidth < 768) {
        if (currentItem === 0) {
            $('.owl-prev-btn, .owl-next-btn').hide();
        } else {
            $('.owl-prev-btn, .owl-next-btn').show();
        }
    }
});

// Check on page load
$(window).on('load resize', function() {
    const windowWidth = $(window).width();
    if (windowWidth < 768) {
        const currentItem = owl.find('.owl-item.active').first().index();
        if (currentItem === 0) {
            $('.owl-prev-btn, .owl-next-btn').hide();
        } else {
            $('.owl-prev-btn, .owl-next-btn').show();
        }
    } else {
        $('.owl-prev-btn, .owl-next-btn').show();
    }
});




});


