$(".owl-carousel").owlCarousel({
  loop: false,
  stagePadding: 20,
  margin: 20,
  nav: true,
  navText: [
    '<span class="icon left">?</span>',
    '<span class="icon right">?</span>'
  ],
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 1
    },
    960: {
      items: 2
    },
    1200: {
      items: 2
    }
  }
});