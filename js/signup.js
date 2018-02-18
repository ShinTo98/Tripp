function checkForm() {
    // First check empty entries
    values = document.getElementsByTagName('input');
    for(var i = 0; i < values.length; i++) {
        if(values[i].value == '') {
            alert('Everything need to be filled out!');
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



// functions for tourguide signup
function storeGeneralInfo() {
    // parse all the param from general info page
    let urlParams = new URLSearchParams(window.location.search);
    let firstname = urlParams.get('first-name');
    let lastname = urlParams.get('last-name');
    let gender = urlParams.get('genders');
    let email = urlParams.get('email');
    let password = urlParams.get('password');

    // store general info in local storage
    if(typeof(Storage) !== 'undefined') {
        localStorage.setItem('first-name', firstname);
        localStorage.setItem('last-name', lastname);
        localStorage.setItem('gender', gender);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    } else {
        console.log('U r basically fucked.');
    }
}