var hiddenDetails = document.getElementById('shirt-details');
var revealButton = document.getElementById('reveal');
var changeButton = document.getElementById('change');
var shirt = document.getElementById('shirt');
var background = document.getElementById('background');
var greenShirtOne = "https://imgs.michaels.com/renditions/eb6ecd54-039e-493f-841f-fc7de1afeebe_thumbnail.jpg";
var greenShirtTwo = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxcK56O2-0QBXbHPH4TyzvVDxnNbHh8jCezFqzXLJQNxQW_vc_Pw9SvSNpL07klUOv6IbhZNfRY7yX7FquGn3ZTigMzTZtgdEKW38xSLCOWt2TWBdfrk-ym2ATxZNmuZXAUi8q2DNnBw&usqp=CAc";
revealButton.addEventListener('click', function() {
    hiddenDetails.hidden = !hiddenDetails.hidden;
    revealButton.value = hiddenDetails.hidden ? 'Reveal Details' : 'Close Details';
    revealButton.setAttribute('for', String(!hiddenDetails.hidden));
});

changeButton.addEventListener('click', function() {


    shirt.src = greenShirtOne;
});

changeButton.addEventListener('dblclick', function() {
    shirt.src = greenShirtTwo;
});