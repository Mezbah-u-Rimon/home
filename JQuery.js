
//--------------mobile menu start----------------//

$('.hide').hide();
$('.responsive-menu').hide();



$('.show').click( function (){
  $('.responsive-menu').slideDown(1000);
  $('.show').hide();
  $('.hide').show();
});



$('.hide').click( function (){
  $('.responsive-menu').slideUp(1000);
  $('.hide').hide();
  $('.show').show();
});


//--------------mobile menu close----------------//










//-----------------gallary section start--------------//

  $('.dining-a').hide();
  $('.kitchen-a').hide();
  $('.bedroom-a').hide();
  $('.baby-a').hide();
  $('.living-a').hide();



$('.house').click( function (){
  $('.house-a').slideDown(1000);
  $('.dining-a').hide();
  $('.kitchen-a').hide();
  $('.bedroom-a').hide();
  $('.baby-a').hide();
  $('.living-a').hide();

});



$('.dining').click( function (){
  $('.dining-a').slideDown(1000);
  $('.house-a').hide()
  $('.kitchen-a').hide();
  $('.bedroom-a').hide();
  $('.baby-a').hide();
  $('.living-a').hide();
});



$('.kitchen').click( function (){
  $('.kitchen-a').slideDown(1000);
  $('.house-a').hide();
  $('.dining-a').hide();
  $('.bedroom-a').hide()
  $('.baby-a').hide();
  $('.living-a').hide();
});



$('.bedroom').click( function (){
  $('.bedroom-a').slideDown(1000);
  $('.house-a').hide();
  $('.dining-a').hide();
  $('.kitchen-a').hide();
  $('.baby-a').hide();
  $('.living-a').hide();
});



$('.living').click( function (){
  $('.living-a').slideDown(1000);
  $('.house-a').hide();
  $('.dining-a').hide();
  $('.kitchen-a').hide();
  $('.baby-a').hide();
  $('.bedroom-a').hide();
});




$('.baby').click( function (){
  $('.baby-a').slideDown(1000);
  $('.house-a').hide();
  $('.dining-a').hide();
  $('.kitchen-a').hide();
  $('.living-a').hide();
  $('.bedroom-a').hide();
});


//-----------------gallary section close--------------//












//-----------------AOS section start-----------------//

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//-----------------AOS section close-----------------//

