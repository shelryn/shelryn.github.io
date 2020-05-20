$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["prev", "next"],
    responsive:{
        0:{
          loop:false,
          items:1,
          center: true,


        },
        800:{
          margin:10,
          // stagePadding: 150,
          items:2,
        },
        1400:{
            margin:10,
            stagePadding:200,

            // stagePadding: 300,
            items:3,
            center: true,
        }
    },
})
