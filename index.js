document.addEventListener('DOMContentLoaded', function () {
            const showMoreBtn = document.getElementById('showMoreBtn');
            const additionalFields = document.querySelector('.additional-fields');

            showMoreBtn.addEventListener('click', function () {
                additionalFields.style.display = additionalFields.style.display === 'none' ? 'block' : 'none';

            });
        });

        $(document).ready(function () {
            const showMoreBtn = $('#showMoreBtn');
            const additionalFields = $('.additional-fields');
            const registrationForm = $('#registrationForm');
        
            showMoreBtn.click(function () {
                additionalFields.toggleClass('expanded');
                showMoreBtn.find('i').toggleClass('fa-arrow-down fa-arrow-up');
            });
        
            $('.form input, .form select').on('input', function () {
                $(this).removeClass('error');
                $(this).next('.error-message').remove();
            });
        
            registrationForm.submit(function (event) {
                let isValid = true;
                let invalidFields = [];
        
                function validateField(selector, regex, fieldName) {
                    const value = $(selector).val();
                    if (!regex.test(value)) {
                        $(selector).addClass('error');
        
                        const errorMessage = `<span class="error-message">${fieldName} is invalid</span>`;
                        $(selector).next('.error-message').remove();
                        $(selector).after(errorMessage);
        
                        isValid = false;
                        invalidFields.push(fieldName);
                    }
                }
        
                validateField('#firstName', /^[A-Za-z ]{3,}$/, 'First Name');
                validateField('#lastName', /^[A-Za-z ]{3,}$/, 'Last Name');
                validateField('#mobileNumber', /^[0-9]+$/, 'Mobile Number');
                validateField('#country', /^[A-Za-z ]+$/, 'Country');
                validateField('#email', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email Address');
                validateField('#password', /^.{8,}$/, 'Password (min 8 characters)');
                validateField('#address', /^[A-Za-z0-9 ]+$/, 'Address');
                validateField('#city', /^[A-Za-z ]+$/, 'City');
                validateField('#zipcode', /^\d{5}$/, 'Zip Code');
        
                if (!isValid) {
                    event.preventDefault();
                    const errorMessage = `Please fill in valid data for the following fields: ${invalidFields.join(', ')}`;
                    // You might display this error message in a specific area on your page or customize it accordingly
                    // alert(errorMessage);
                    return false;
                } else {
                    // Perform additional actions upon successful form submission
                }
            });
        });
document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('loginLink');
    const loginContainer = document.querySelector('.login-container');
    const close = document.getElementById('closeIcon');
    // Event listener for the login link
    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (navigating)

        // Toggle visibility of the login container
        loginContainer.style.display = (loginContainer.style.display === 'none') ? 'block' : 'none';
    });
    closeIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (navigating)

        // Toggle visibility of the login container
        loginContainer.style.display = (loginContainer.style.display === 'block') ? 'none' : 'block';
    });
});

        
        
        