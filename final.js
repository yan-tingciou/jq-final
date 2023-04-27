$(document).ready(function(){
    $('.list > li >a').click(function(event){
      event.preventDefault();
      $(this).parent().find('ul').slideToggle();
      $(this).parent().siblings().find('ul').slideUp();
      
    });
    const swiper = new Swiper('.swiper', {
    // Optional parameters
      direction: 'horizontal',
      autoplay: {
      delay: 3000,
      },
      loop: true,
      effect: 'fade',
      speed: 800,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
      lightbox.option({
      'resizeDuration': 1000,
      'wrapAround': true
    })
});