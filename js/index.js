// $(document).ready(function() {
//     var timeToDisplay = 2000;

//     var slideshow = $('#div1');
//     var urls = [
//        '../img/heatmap1.jpg',
//        '../img/Heatmap-sat50.jpg',
//     ];

//     var index = 0;
//     var transition = function() {
//         var url = urls[index];

//         slideshow.css('background-image', 'url(' + url + ')');

//         index = index + 1;
//         if (index > urls.length - 1) {
//             index = 0;
//         }
//     };

//     var run = function() {
//         transition();
//         slideshow.fadeIn('slow', function() {
//             setTimeout(function() {
//                 slideshow.fadeOut('slow', run);
//             }, timeToDisplay);
//         });
//     }

//     run();
// })​;

// let pulse = document.querySelector('#div1');

// window.addEventListener( "load", function(event) {
//     console.log(pulse)
// })

const mobileDropNav = document.querySelector('.drop-menu');
const mobileMenuButton = document.querySelector('.mobile-menu-icon');
mobileMenuButton.addEventListener('click', function(){
  mobileDropNav.classList.toggle('unhide');
});