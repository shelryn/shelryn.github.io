$('.owl-carousel').owlCarousel({
    loop:true,
    navText: ["prev", "next"],
    responsive:{
        0:{
          loop:false,
          items:2,
          center: true,
          nav:false,


        },
        900:{
          items:2,
          nav:true,

        },
        1400:{
            margin:10,
            stagePadding:85,
            nav:true,
            items:3,
            center: true,
        }
    },
})
