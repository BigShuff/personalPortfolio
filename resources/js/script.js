const flyer = document.querySelector('.flyer')
const flyerImg = document.querySelector('.flyerImg')
flyer.style.visibility = 'hidden';
//grab my flyer div
const rollImage1 = document.querySelector('.image1');

//add an event listener to my div
rollImage1.addEventListener('mouseenter', function(){
    //oposite is hidden
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/southfields.png')
    
});

//add an event listener to my div
rollImage1.addEventListener('mouseleave', function(){
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});
