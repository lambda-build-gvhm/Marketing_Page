/* Heat pulse effect for banner */

let thing = document.querySelector('#div1');
window.addEventListener( "load", function(event) {
    let num = 0;
const interval = setInterval(()=> {
    if(num===50) {
        clearInterval(interval);
        thing.style.backgroundImage = "url('img/circle-heat-map-3-overlay.jpg')";
    } else if (num % 2 ===0){
        ++num;
        console.log(num);
        thing.style.backgroundImage = "url('img/circle-heat-map-3-saturated.jpg')";
    } else {
        console.log(num);
        ++num;
        thing.style.backgroundImage = "url('img/circle-heat-map-3-overlay.jpg')";
    }       
}, 1500);
});

/* Mobile Dropdown */

const mobileDropNav = document.querySelector('.drop-menu');
const mobileMenuButton = document.querySelector('.mobile-menu-icon');
mobileMenuButton.addEventListener('click', function(){
  mobileDropNav.classList.toggle('unhide');
});

/* Modals */

class ModalLink {
    constructor(element) {
    this.element = element;

    this.data = document.querySelector(`.trigger[data-tab='${this.element.dataset.tab}']`);
    this.modal = document.querySelector(`.modal[data-tab='${this.element.dataset.tab}']`);
    this.closeButton = document.querySelector(`.close-button[data-tab='${this.element.dataset.tab}']`);
    this.closeButton.addEventListener('click', ()=>  {
        this.modal.classList.remove('show-modal');
    });
    this.element.addEventListener('click', (event) => {
        this.select();
    });
    }
    
    /*Tried to remove modal on mobile here but this did not work */

    // var x = window.matchMedia("(max-width: 665px)")
    
    // if (x.matches) { // If media query matches
    //     this.element.addEventListener('click', (event) => {
    //         this.select();
    //     });
    //   }
    // }

    select() {
        const modals = document.querySelectorAll('.modal');

        Array.from(modals).forEach( function(modal) {
            modal.classList.remove('show-modal');
        })
        this.modal.classList.add('show-modal');
    }
}

modal_links = document.querySelectorAll('.trigger');
modal_links.forEach( e => {
    return new ModalLink(e);
});


/* Slide in on scroll -- Using ScrollReveal library*/

window.div = ScrollReveal();
div.reveal('.info-bar', { origin: 'bottom', delay:100 });
div.reveal('.vertical-info-bar-right', { origin: 'right', delay:75, distance : '1000px' });
div.reveal('.vertical-info-bar-left', { origin: 'left', delay:75, distance : '500px' });



