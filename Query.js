$(document).ready(function () {

  $(".on").click(function () {
    $('.slidenav').css({
        'transform': 'translateX(0px)',
    });
});

$(".close").click(function () {
    $('.slidenav').css({
        'transform': 'translateX(150%)',
    });
});

$(".out").click(function () {
    $('.slidenav').css({
        'transform': 'translateX(150%)',
    });
  
})


            // Image and text data
            var sliderData = [
                { src: "./Image/Audi.png", title: "Audi", subtitle: "R8" },
                // Add more data for additional slides
                { src: "./image/BMW.png", title: "BMW", subtitle: "Luxury" },
                { src: "./Image/lamborghini.png", title: "lamborghini", subtitle: "hurricane" },
                // Add more data for additional slides
            ];


            // Initial slide index
            var currentSlide = 0;
            // Function to update the slider content
            function updateSliderContent() {
                var currentData = sliderData[currentSlide];
                $(".car-t").text(currentData.title);
                $(".car-p").text(currentData.subtitle);
                $(".image-main").attr("src", currentData.src);
            }

            $(".fa-arrow-right").click(function () {
                currentSlide = (currentSlide + 1) % sliderData.length;
                updateSliderContent();

                $(".text")
                    .css({
                        transition: 'transform 0.5s ease-out',
                        transform: 'translateY(2px)', // Negative value to move left
                    })
                    .one('transitionend', function () {
                        // Reset styles after the transition is complete
                        $(this).css({
                            transition: '',
                            transform: ''
                        });
                    });
                // Assuming .image-main is the class of the image element
                $(".image-main")
                    .css({
                        transition: 'transform 0.5s ',
                        transform: 'translateX(-10px)' // Negative value to move left

                    })
                    .one('transitionend', function () {
                        // Reset styles after the transition is complete
                        $(this).css({
                            transition: '',
                            transform: ''
                        });
                    });
            });

            $(".fa-arrow-left").click(function () {
                currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
                updateSliderContent();

                $(".text")
                    .css({
                        transition: 'transform 0.5s ease-out',
                        transform: 'translateY(2px)', // Negative value to move left
                    })
                    .one('transitionend', function () {
                        // Reset styles after the transition is complete
                        $(this).css({
                            transition: '',
                            transform: ''
                        });
                    });
                // Assuming .image-main is the class of the image element
                $(".image-main")
                    .css({
                        transition: 'transform 0.5s ',
                        transform: 'translateX(-10px)' // Negative value to move left
                    })
                    .one('transitionend', function () {
                        // Reset styles after the transition is complete
                        $(this).css({
                            transition: '',
                            transform: ''
                        });
                    });
            });

            // Initial content update
            updateSliderContent();
       




$(".scrollup").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


// Default
showPopular(0);
showPopular(1);
showPopular(2);

function showPopular(index) {
    var popularImages = ['./Image/Chevrolet-Camaro-ZL1-7.jpg', './Image/Mercedes-Benz1.jpg', './Image/Lamg.jpg'];
    var popularTitles = ['Chevrolet-Camaro', 'Mercedes Benz', 'lamborghini'];
    var popularPrices = ['$10,000', '$15,000', '$13,000'];

    $('.card:eq(' + index + ') .img-car').attr('src', popularImages[index]); // Update card in 'Top Popular' section
    $('.card:eq(' + index + ') .card-content h3').text(popularTitles[index]);
    $('.card:eq(' + index + ') .card-content p').text('Updated Price: ' + popularPrices[index]);

   
}


// Function to update content for 'New Cars'
function showNewCars(index) {
    // Update content for 'New Cars'
    var newCarImages = ['./Image/Updated-Image-NewCars.jpg', './Image/olav.jpg', './Image/Updated-Image-NewCars.jpg'];
    var newCarTitles = ['Updated New Car 1', 'Updated New Car 2', 'Updated New Car 3'];
    var newCarPrices = ['$Y,YYY', '$55,000', '$22,000'];



    $('.card:eq(' + index + ') .img-car').attr('src', newCarImages[index]);
    $('.card:eq(' + index + ') .card-content h3').text(newCarTitles[index]);
    $('.card:eq(' + index + ') .card-content p').text('Updated Price: ' + newCarPrices[index]);

 
}

// Function to update content for 'Sale Off'
function showSaleOff(index) {
    // Update content for 'Sale Off'
    var saleOffImages = ['./Image/Updated-Image-SaleOff.jpg', './Image/Updated-Image-SaleOff.jpg', './Image/Updated-Image-SaleOff.jpg'];
    var saleOffTitles = ['Updated Sale Off Car 1', 'Updated Sale Off Car 2', 'Updated Sale Off Car 3'];
    var saleOffPrices = ['$Z,ZZZ', '$Z,ZZZ', '$Z,ZZZ'];


    $('.card:eq(' + index + ') .img-car').attr('src', saleOffImages[index]);
    $('.card:eq(' + index + ') .card-content h2').text(saleOffTitles[index]);
    $('.card:eq(' + index + ') .card-content p').text('Updated Price: ' + saleOffPrices[index]);

  
}

// Click events for 'Top Popular'
$('.popular').on('click', function () {
    showPopular(0);
    showPopular(1);
    showPopular(2);
});

// Click events for 'New Cars'
$('.new-cars').on('click', function () {
    showNewCars(0);
    showNewCars(1);
    showNewCars(2);
});

// Click events for 'Sale Off'
$('.sale-off').on('click', function () {
    showSaleOff(0);
    showSaleOff(1);
    showSaleOff(2);
});







});




