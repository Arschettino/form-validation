let complete_button = document.querySelector('.send');

let info_form = document.forms[0];

let message = document.querySelector('.message');

complete_button.addEventListener('click', event => {
    
    if(info_form.checkValidity()) {
        message.textContent = "High Five!!!"
        message.classList.remove("invalid");
    }   
    else {
        message.textContent = "Try again";
        message.classList.add("invalid");
        event.preventDefault();
    }

});

info_form['email'].addEventListener('input', event => {
    event.target.setCustomValidity('');
    if (!event.target.checkValidity()) {
        showError(event.target);
    }
});
info_form['country'].addEventListener('input', event => {
    event.target.setCustomValidity('');
    if (!event.target.checkValidity()) {
        showError(event.target);
    }
});
info_form['zip'].addEventListener('input', event => {
    event.target.setCustomValidity('');
    if (!event.target.checkValidity()) {
        showError(event.target);
    }
});
info_form['pass1'].addEventListener('input', event => {
    event.target.setCustomValidity('');
    if (!event.target.checkValidity()) {
        showError(event.target);
    }
});
info_form['pass2'].addEventListener('input', event => {
    event.target.setCustomValidity('');
    if (!event.target.checkValidity()) {
        showError(event.target);
    }
    
    if (info_form['pass1'].value !== info_form['pass2'].value) {
        event.target.setCustomValidity("Passwords must match");
        event.target.reportValidity();
    }
});

function showError(element) {
    if (element.validity.typeMismatch) {
        element.setCustomValidity("Please enter your email address in the correct format");
        element.reportValidity();
    }
    else if (element.validity.patternMismatch) {
        element.setCustomValidity("Please enter your zip code in the correct format");
        element.reportValidity();
    }
    else {
        element.setCustomValidity("Please check your responses and try again");
        element.reportValidity();
    }

}