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

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick)