//after validation set submision box to display:block, and main-content to display:none
const main = document.getElementById('main-content');
const submission = document.getElementById('submission');
const form = document.querySelector('form');
const submit = document.getElementById('submitBtn');
const dismiss = document.getElementById('dismissBtn');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission always
    let isValid = true;

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (isValid) {
        main.style.display = 'none';
        submission.style.display = 'block';
    }
});

// Adding event listener to the dismiss button
dismiss.addEventListener('click', () => {
    submission.style.display = 'none';
    main.style.display = 'block';
});
