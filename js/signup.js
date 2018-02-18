function checkForm() {
    // First check empty entries
    values = document.getElementsByTagName('input');
    for(var i = 0; i < values.length; i++) {
        if(values[i].value == '') {
            alert('You Need to Fill Out Everything!');
            return false;
        }
    }

    // check confirm email
    var email = document.getElementById('email-input').value;
    var confirm = document.getElementById('confirm-email-input').value;
    if(email != confirm) {
        alert('Email not the same as confirmed!');
        return false;
    }

    // check confirm password 
    var password = document.getElementById('password-input').value;
    var confirm_p = document.getElementById('confirm-password-input').value;
    if(password != confirm_p) {
        alert('Password not the same as confirmed!');
        return false;
    }

}