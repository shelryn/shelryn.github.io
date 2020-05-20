$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["prev", "next"],
    responsive:{
        700:{
          loop:false,
          items:3,
          center: true,


        },
        1200:{
          margin:1,
          stagePadding: 150,
          items:3,
        },
        1600:{
            margin:10,
            stagePadding: 300,
            items:3,
            center: true,
        }
    },
})
