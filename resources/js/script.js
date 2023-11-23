const flyer = document.querySelector('.flyer')
const flyerImg = document.querySelector('.flyerImg')
flyer.style.visibility = 'hidden';
//grab my flyer div
const rollImage1 = document.querySelector('.image1');
const rollImage2 = document.querySelector('.image2');
const rollImage3 = document.querySelector('.image3');
//add an event listener to my div
rollImage1.addEventListener('mouseenter', function () {
    //oposite is hidden
    flyer.style.postion = 'absolute';
    flyer.style.top = '23%';
    flyer.style.left = '28%';
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/southfields.png');


});

//add an event listener to my div
rollImage1.addEventListener('mouseleave', function () {
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});

rollImage2.addEventListener('mouseenter', function () {
    //oposite is hidden
    flyer.style.postion = 'absolute';
    flyer.style.top = '33%';
    flyer.style.left = '28%';
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/ccFotoMatic.png')

});

//add an event listener to my div
rollImage2.addEventListener('mouseleave', function () {
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});

rollImage3.addEventListener('mouseenter', function () {
    //oposite is hidden
    flyer.style.postion = 'absolute';
    flyer.style.top = '52.5%';
    flyer.style.left = '28%';
    flyer.style.visibility = 'visible';
    flyerImg.setAttribute('src', 'resources/images/ccCheatSheetMini.png')

});

//add an event listener to my div
rollImage3.addEventListener('mouseleave', function () {
    //oposite is hidden
    flyer.style.visibility = 'hidden';
    //unload image
});

// Create a condition that targets viewports at least 1600px wide
const mediaQuery = window.matchMedia('(max-width: 1600px)');
mediaQuery.addEventListener('change', mqHandler);
function mqHandler(e) {
    // Check if the media query is true
    if (e.matches) {
        flyerImg.style.width = '85%';
    } else {
        flyerImg.style.width = '100%'
    };
}