const flyer = document.querySelector('.flyer')
const flyerImg = document.querySelector('.flyerImg')
flyer.style.visibility = 'hidden';
//grab my flyer div
const rollImage1 = document.querySelector('.image1');
const rollImage2 = document.querySelector('.image2');
const rollImage3 = document.querySelector('.image3');
//add an event listener to my div
rollImage1.addEventListener('mouseenter', function(){
    //oposite is hidden
    flyer.style.postion = 'absolute';
    flyer.style.top = '5%';
    flyer.style.left = '6%';
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/southfields.png');
    
    
});

//add an event listener to my div
rollImage1.addEventListener('mouseleave', function(){
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});

rollImage2.addEventListener('mouseenter', function(){
    //oposite is hidden
    flyer.style.postion = 'absolute';
    flyer.style.top = '20%';
    flyer.style.left = '6%';
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/ccFotoMatic.png')
    
});

//add an event listener to my div
rollImage2.addEventListener('mouseleave', function(){
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});

rollImage3.addEventListener('mouseenter', function(){
    //oposite is hidden
    flyer.style.postion = 'absolute';
    flyer.style.top = '35%';
    flyer.style.left = '6%';
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/ccCheatSheetMini.png')
    
});

//add an event listener to my div
rollImage3.addEventListener('mouseleave', function(){
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});