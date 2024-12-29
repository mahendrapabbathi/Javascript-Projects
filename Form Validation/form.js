function validName() {
    const name = document.getElementById("name").value;
    const error = document.getElementById("name-error");

    if (name.length === 0) {
        error.innerHTML = "Name is required";
        return false;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
        error.innerHTML = "Only alphabets are allowed";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}

function validPhoneNo() {
    const phone = document.getElementById("phone").value;
    const error = document.getElementById("phone-error");

    if (phone.length === 0) {
        error.innerHTML = "Phone number is required";
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        error.innerHTML = "Enter valid phone number";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}


function validEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("email-error");

    if (email.length === 0) {
        error.innerHTML = "Email is required";
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.innerHTML = "Enter valid email address";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}

function validMessage() {
    const message = document.getElementById("message").value;
    const error = document.getElementById("message-error");
    const required=20;
    const left=required-message.length;

    if (left > 0) {
        error.innerHTML = left+" characters are remaining";
        return false;
    }
    error.innerHTML = ""; 
    return true;
}

function validateForm() {
    const nameValid = validName();
    const phoneValid = validPhoneNo();
    const emailValid = validEmail();
    const messageValid = validMessage();

    if (!nameValid || !phoneValid || !emailValid || !messageValid) {
        document.getElementById("submit-error").innerHTML = "Please fix errors before submitting";
        return false; 
    }

    document.getElementById("submit-error").innerHTML = ""; 
    alert("Form submitted successfully!");
    return true; 
}
