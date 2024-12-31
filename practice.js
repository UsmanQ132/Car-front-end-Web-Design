// Default
CarMoving = [0];
function CarMoving(index) {
    var CarAnimation  =['./Image/chevrolet-camaro_bg.png', './Image/Mercedes-Benz-bg.png', './Image/Updated-Image-Popular.jpg',
    './Image/olav-removebg.png','./Image/olav-removebg.png',
];
}

function attachAnimation() {
    $('.card:eq(' + index + ')').on('click', function () {
        $('.moving-car').attr('src', CarAnimation[index]).css({
            transition: 'transform 0.5s ease-out',
            transform: 'translateX(10px)', // Negative value to move left
        }).one('transitionend', function () {
            // Reset styles after the transition is complete
            $(this).css({
                transition: '',
                transform: ''
            });
        });
    });
}



showPopular(0).click(function(){
    attachAnimation(0);
})

showPopular(1).click(function(){
    attachAnimation(1);
})

showPopular(2).click(function(){
    attachAnimation(2);
})

showNewCars(0).click(function(){
    attachAnimation(3);
})

showNewCars(1).click(function(){
    attachAnimation(4);
})

showNewCars(2).click(function(){
    attachAnimation(5);
})







