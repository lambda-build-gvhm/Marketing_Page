let thing = document.querySelector('#div1');
// let loop = 3;
//set Interval and then clear interval

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

// window.addEventListener( "load", function(event) {
    //     let num = 0;
    // const interval = setInterval(()=> {
    //     if(num===3) {
    //         clearInterval(interval);
    //     } else{
    //         ++num;
    //         thing.style.backgroundImage = "url('img/Heatmap-sat50.jpg')";    }
    // }, 1000);
    // })

// let num = 0;
// const interval = setInterval(()=> {
//     if(num===3) {
//         clearInterval(interval);
//     } else{
//         ++num;
//         console.log(num);  
//     }
// }, 1000);

//Mobile Dropdown
const mobileDropNav = document.querySelector('.drop-menu');
const mobileMenuButton = document.querySelector('.mobile-menu-icon');
mobileMenuButton.addEventListener('click', function(){
  mobileDropNav.classList.toggle('unhide');
});

