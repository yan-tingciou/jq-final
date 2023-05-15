//頁面滑到700px左右時出現gotop
function showBtnCondition() {
  if ($(this).scrollTop() > 700) {
    $('#gotop').fadeIn();
      } else {
       $('#gotop').fadeOut();
     }
   }
$(window).scroll(showBtnCondition);
$(document).ready(function(){
 $('.list > li >a').click(function(event){
   event.preventDefault();
   $(this).parent().find('ul').slideToggle();
   $(this).parent().siblings().find('ul').slideUp();
   
 });
 $('.button').click(function(event){
    $('.list').slideToggle();                
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
 
 //course的燈箱效果
   lightbox.option({
   'resizeDuration': 500,
   'wrapAround': true
   })
 
});