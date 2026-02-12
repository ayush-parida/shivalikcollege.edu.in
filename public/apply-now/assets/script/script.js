function loadIntlTelInput() {
    var input = document.querySelector("#mobile-number");
    var iti = window.intlTelInput(input, {
        initialCountry: "in",
        separateDialCode: true,
        preferredCountries: ["in", "us"] // Specify the preferred countries' ISO 2-letter codes
    });
}

$(document).ready(function() {
    if (window.intlTelInput) {
        loadIntlTelInput();
    } else {
        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js", loadIntlTelInput);
    }
});

const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// Show or hide the button based on the scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

$(document).ready(function() {
    $('#programme optgroup').each(function() {
        $(this).before('<span class="optgroup-label">' + $(this).attr('label') + '</span>');
    });
});