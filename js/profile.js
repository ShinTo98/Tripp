function loadResults(location) {
    // parse user search params
    let urlParams = new URLSearchParams(window.location.search);
    let firstname = urlParams.get('first-name');
    let lastname = urlParams.get('last-name');
    let gender = urlParams.get('genders');
    let email = urlParams.get('email');
    let password = urlParams.get('password');

    document.getElementById("first-name-input").value = firstname;
    document.getElementById("last-name-input").value = lastname;
    setGenders(gender);
    document.getElementById("email-input").value = email;
    document.getElementById("password-input").value = password;
}

function setGenders(value) {
    var allGenders = document.getElementsByTagName("option");
    for(var i = 0; i < allGenders.length; i++) {
        if(allGenders[i].value == value) {
            allGenders[i].selected = 'selected';
        }
    }
}

function editProfile() {
    if(document.getElementById('edit-button').innerHTML == 'Edit My Profile') {
        var inputs = document.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        document.getElementsByTagName('select')[0].disabled = false;
        var hiddens = document.getElementsByClassName('hidden');
        for(var i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'inline';
        }
        document.getElementById('edit-button').innerHTML = 'Save My Edits';
    } else {
        window.alert('Successfully Saved!');
        var inputs = document.getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        document.getElementsByTagName('select')[0].disabled = true;
        var hiddens = document.getElementsByClassName('hidden');
        for(var i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'none';
        }
        document.getElementById('edit-button').innerHTML = 'Edit My Profile'; 
    }
    
}