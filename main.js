// main.js

$(document).ready(function() {
    // Get the modal
    var modal = $('#contactFormModal');

    // Get the button that opens the modal
    var btn = $('#contactUsBtn');

    // Get the <span> element that closes the modal
    var span = $('.close');

    // When the user clicks the button, open the modal
    btn.on('click', function() {
        modal.show();
    });

    // When the user clicks on <span> (x), close the modal
    span.on('click', function() {
        modal.hide();
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    // Form submission handler
    $('#contactForm').on('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // AJAX form submission to Getform.io
        $.ajax({
            url: 'https://getform.io/f/{your-getform-endpoint}',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert('Thank you for your message! We will get back to you soon.');
                modal.hide();
                $('#contactForm')[0].reset(); // Reset form fields
            },
            error: function(error) {
                alert('Oops! Something went wrong. Please try again later.');
            }
        });
    });
});

//service
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

document.querySelectorAll('.slide-image').forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.opacity = '0.5';
        this.nextElementSibling.style.opacity = '1'; // Show overlay on hover
    });
    image.addEventListener('mouseout', function() {
        this.style.opacity = '1';
        this.nextElementSibling.style.opacity = '0'; // Hide overlay when not hovered
    });
});

//project

function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}
