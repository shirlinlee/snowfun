$('.owl-carousel').owlCarousel({
  loop:true,
  margin:12,
  // autoplay: true,
  nav:false,
  dots:false,
  center: true,
  // stagePadding: 70, 
  responsive:{
      0:{
        items:1.5,
        // stagePadding:100
        center: false,
      },
      576:{
        items:2.5,
        // stagePadding:100
        center: false,
      },
      992:{
        items:3.5
      },
      1200:{
        items:4.5
      },
      1400:{
        items:5.5
    }
  }
})