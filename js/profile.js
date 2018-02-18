function loadResults(location) {
    // parse user params
    let urlParams = new URLSearchParams(window.location.search);
    let firstname = urlParams.get('first-name');
    let lastname = urlParams.get('last-name');
    let gender = urlParams.get('genders');
    let email = urlParams.get('email');
    let password = urlParams.get('password');

    // if from tour guide sign up, get data from local storage
    if(firstname == null) {
        firstname = localStorage.getItem('first-name');
        lastname = localStorage.getItem('last-name');
        gender = localStorage.getItem('gender');
        email = localStorage.getItem('email');
        password = localStorage.getItem('password');
    }

    document.getElementById("first-name-input").value = firstname;
    document.getElementById("last-name-input").value = lastname;
    setGenders(gender);
    document.getElementById("email-input").value = email;
    document.getElementById("password-input").value = password;

    // parse user params (tour guide)
    let places = urlParams.get('places');
    let themes = urlParams.get('themes');
    let description = urlParams.get('description');
    let from_date = urlParams.get('from-date');
    let to_date = urlParams.get('to-date');
    let from_time = urlParams.get('from-time');
    let to_time = urlParams.get('to-time');
    let plan_price = urlParams.get('plan-price');
    let accompany_price = urlParams.get('accompany-price');

    // If from tour guide signup
    if(places != null) {
        document.getElementById('places-input').value = places;
        document.getElementById('themes-input').value = themes;
        document.getElementById('description-input').value = description;
        document.getElementById('from-date-input').value = from_date;
        document.getElementById('to-date-input').value = to_date;
        document.getElementById('from-time-input').value = from_time;
        document.getElementById('to-time-input').value = to_time;
        document.getElementById('plan-price-input').value = plan_price;
        document.getElementById('accompany-price-input').value = accompany_price;
        document.getElementsByClassName("tour-guide-info")[0].style.display = 'inline';
    }
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