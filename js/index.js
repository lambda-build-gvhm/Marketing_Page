// //Heat pulse event

let thing = document.querySelector('#div1');
window.addEventListener( "load", function(event) {
    let num = 0;
const interval = setInterval(()=> {
    if(num===2) {
        clearInterval(interval);
        thing.style.backgroundImage = "url('img/heatmap1.jpg')";
    } else if (num % 2 ===0){
        ++num;
        console.log(num);
        thing.style.backgroundImage = "url('img/Heatmap-sat50.jpg')";
    } else {
        console.log(num);
        ++num;
        thing.style.backgroundImage = "url('img/heatmap1.jpg')";
    }       
}, 800);
})

//Mobile Dropdown
const mobileDropNav = document.querySelector('.drop-menu');
const mobileMenuButton = document.querySelector('.mobile-menu-icon');
mobileMenuButton.addEventListener('click', function(){
  mobileDropNav.classList.toggle('unhide');
});

//Heat pulse practice

// let thing = document.querySelector('#div1');
// window.addEventListener( "load", function(event) {
//     let num = 0;
// const interval = setInterval(()=> {
//     if(num===3) {
//         clearInterval(interval);
//         thing.style.backgroundImage = "url('img/purple-map-normal.jpg')";
//     } else if (num % 2 ===0){
//         ++num;
//         console.log(num);
//         thing.style.backgroundImage = "url('img/purple-map-100.jpg')";
//     } else {
//         console.log(num);
//         ++num;
//         thing.style.backgroundImage = "url('img/purple-map-0.jpg')";
//     }       
// }, 800);
// })