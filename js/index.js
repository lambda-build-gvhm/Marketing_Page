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

// var modal = document.querySelector(".modal1");
// var trigger = document.querySelector(".card1");
// var closeButton = document.querySelector(".close-button");

// function toggleModal1() {
//     modal.classList.toggle("show-modal");
// }

// // function windowOnClick(event) {
// //     if (event.target === modal) {
// //         toggleModal();
// //     }
// // }

// trigger.addEventListener("click", toggleModal1);
// closeButton.addEventListener("click", toggleModal1);
// // window.addEventListener("click", windowOnClick);



// // var modal = document.querySelector(".modal1");
// // var trigger = document.querySelector(".card1");
// // var closeButton = document.querySelector(".close-button");

// // function toggleModal1() {
// //     modal.classList.toggle("show-modal");
// // }

// // function windowOnClick(event) {
// //     if (event.target === modal) {
// //         toggleModal1();
// //     }
// // }

// trigger.addEventListener("click", toggleModal1);
// closeButton.addEventListener("click", toggleModal1);
// window.addEventListener("click", windowOnClick);

// var modal = document.querySelector(".modal2");
// var trigger = document.querySelector(".card2");
// var closeButton = document.querySelector(".close-button");

// function toggleModal2() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal2();
//     }
// }

// trigger.addEventListener("click", toggleModal2);
// closeButton.addEventListener("click", toggleModal2);
// window.addEventListener("click", windowOnClick);

// var modal2 = document.querySelector(".modal2");
// var trigger2 = document.querySelector(".card2");
// var closeButton2 = document.querySelector(".close-button2");

// function toggleModal2() {
//     modal2.classList.toggle("show-modal");
// }

// // function windowOnClick(event) {
// //     if (event.target === modal) {
// //         toggleModal();
// //     }
// // }

// trigger2.addEventListener("click", toggleModal2);
// closeButton2.addEventListener("click", toggleModal2);

// var modal3 = document.querySelector(".modal3");
// var trigger3 = document.querySelector(".card3");
// var closeButton3 = document.querySelector(".close-button3");

// function toggleModal3() {
//     modal3.classList.toggle("show-modal");
// }

// // function windowOnClick(event) {
// //     if (event.target === modal) {
// //         toggleModal();
// //     }
// // }

// trigger3.addEventListener("click", toggleModal3);
// closeButton3.addEventListener("click", toggleModal3);

class ModalLink {
    constructor(element) {
    this.element = element;

    this.data = document.querySelector(`.trigger[data-tab='${this.element.dataset.tab}']`);
    this.modal = document.querySelector(`.modal[data-tab='${this.element.dataset.tab}']`);
    // this.modal = new ModalLink(this.itemElement);
    this.closeButton = document.querySelector(`.close-button[data-tab='${this.element.dataset.tab}']`);
    this.closeButton.addEventListener('click', ()=>  {
        this.modal.classList.remove('show-modal');
    });
    this.element.addEventListener('click', (event) => {
        this.select();
    });
    }

    select() {
        const modals = document.querySelectorAll('.modal');

        Array.from(modals).forEach( function(modal) {
            modal.classList.remove('show-modal');
        })
        this.modal.classList.add('show-modal');
    }
}


modal_links = document.querySelectorAll('.trigger')
modal_links.forEach( e => {
    return new ModalLink(e);
});


//Slide in on scroll

// ScrollReveal().reveal('.info-bar', { delay: 50 });
// ScrollReveal().reveal('.info-bar', { easing: 'cubic-bezier(0.5, 0, 0, 1)' });
// ScrollReveal().reveal('.info-bar', { origin: 'right' });

window.div = ScrollReveal();
div.reveal('.info-bar', { origin: 'bottom', delay:100 });
div.reveal('.vertical-info-bar-right', { origin: 'right', delay:75, distance : '1000px' });
div.reveal('.vertical-info-bar-left', { origin: 'left', delay:75, distance : '500px' });

div.reveal('.div5-content', { origin: 'bottom' });
div.reveal('.modals', { origin: 'bottom' });

// { easing: 'cubic-bezier(0.5, 0, 0, 1)' }