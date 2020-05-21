$('.owl-carousel').owlCarousel({
    loop:true,
    navText: ["prev", "next"],
    responsive:{
        0:{
          loop:false,
          items:2,
          center: true,
          nav:false,
          // stagePadding:70,


        },
        900:{
          items:2,
          stagePadding:50,

        },
        1100: {
          nav:true,
        },
        1400:{
            margin:0,
            stagePadding: 180,
            nav:true,
            items:3,
            center: true,
        }
    },
})
