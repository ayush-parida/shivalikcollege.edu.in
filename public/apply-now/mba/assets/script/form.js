function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Validate mobile number
    var isValidMobile = validateMobileNumber();
    if (!isValidMobile) {
        return;
    }

    // Get form data
    var formData = $('#myForm').serialize();

    // Send form data to the PHP script using AJAX
    $.ajax({
        type: 'POST',
        url: 'includes/registration.php',
        data: formData,
        success: function(response) {
            $('#successMessage').fadeIn(); // Show success message
            $('#myForm')[0].reset(); // Reset the form
            window.location.href = response.redirect;

        },
        error: function() {
            alert('Error occurred. Please try again.'); // Show error message
        }
    });
}

function validateMobileNumber() {
    var input = document.querySelector("#mobile-number");
    var iti = window.intlTelInputGlobals.getInstance(input);

    // Get the entered mobile number
    var phoneNumber = input.value;

    // Remove any non-digit characters from the phone number
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the mobile number is valid
    if (phoneNumber.length >= 10 && phoneNumber.length <= 11) {
        var countryCode = iti.getSelectedCountryData().dialCode;
        $('#mobile-number').val('+' + countryCode + phoneNumber); // Set the mobile number with country code
        $('#mobileError').hide(); // Hide the error message
        return true;
    } else {
        $('#mobileError').show(); // Show error message for invalid mobile number
        return false;
    }
}