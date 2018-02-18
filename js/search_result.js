'use strict';

// pretend to receive results from database
let results = [
    {
        'name': 'Cheng',
        'image_address': 'cheng_hangzhou.jpg',
        'locations': [
            'Hangzhou',
            'San Diego'
        ],
        'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
    },
    {
        'name': 'Shantao',
        'image_address': 'shantao_casino.png',
        'locations': [
            'Wuhan',
            'San Diego'
        ],
        'description': 'I am great at casino!'
    },
    {
        'name': 'Chao',
        'image_address': 'chao_great.jpeg',
        'locations': [
            'Hangzhou',
            'San Diego'
        ],
        'description': 'I am cool and I will be a great tour guide for you!'
    },
    {
        'name': 'Sherlock',
        'image_address': 'sherlock.jpg',
        'locations': [
            'Baker Street'
        ],
        'description': 'Anderson, don\'t talk out loud. You lower the IQ of the whole street.'
    },
    {
        'name': 'John',
        'image_address': 'john.jpeg',
        'locations': [
            'Baker Street'
        ],
        'description': 'Alright, alright. Girls. Calm down.'
    },
    {
        'name': 'Moriarty',
        'image_address': 'moriarty.jpg',
        'locations': [
            'Baker Street'
        ],
        'description': 'That\'s what people do!'
    },
    {
        'name': 'Eurus',
        'image_address': 'eurus.jpg',
        'locations': [
            'Baker Street'
        ],
        'description': 'I\'m Eurus. Silly name, isn\'t it? Greek. Means “the east wind”. My parents loved silly names, like Eurus… or Mycroft… or Sherlock. Oh, look at him. Didn\'t it ever occur to you, not even once, that Sherlock\'s secret brother might just be Sherlock\'s secret sister? Huh? He\'s making a funny face. I think I\'ll put a hole in it.'
    },
    
];

// load results of trip tour guides at the given location
function loadResults() {

    // parse user search params
    let urlParams = new URLSearchParams(window.location.search);
    let destination = urlParams.get('destination');
    let start_time = urlParams.get('start-time');
    let end_time = urlParams.get('end-time');

	let result_container = document.getElementsByClassName('result-container')[0];
    let result_found = false;

    // display the user searched filter
    let result_info = document.createElement('div');
    result_info.innerHTML = "Your trip to " + destination + ", " + start_time
        + " to " + end_time + ": here are the available tour guides for you:";
    result_container.appendChild(result_info);

    // for each of the returned results of trip tour guides, determine to put
    // into html
    results.forEach( (tour_guide) => {

        // filter tour_guides with destination: if the tour guide does not tour
        // this location, skip
        if (!tour_guide['locations'].includes(destination)) return;
        result_found = true;
        
        // display tour guide
        let result_div = document.createElement('div');
        result_div.className = 'result';

        let image = document.createElement('img');
        image.setAttribute('src', 'image/searchresult/' + tour_guide['image_address']);
        image.setAttribute('alt', '');

        let name = document.createElement('p');
        name.setAttribute('class', 'result-name');
        name.innerHTML = tour_guide['name'];
        
        let description = document.createElement('p');
        description.setAttribute('class', 'result-description');
        description.innerHTML = tour_guide['description'];
        
        let a = document.createElement('a');
        a.setAttribute('class', 'nav-text pic-text a-link-style button-color');
        a.setAttribute('href', '/progress.html?other=' + tour_guide['name'] + '&as=' + 'tourist');
        a.innerHTML = 'Connect';

        result_div.appendChild(image);
        result_div.appendChild(name);
        result_div.appendChild(description);
        result_div.appendChild(a);

        result_container.appendChild(result_div);
    });

    // modify the info if the search at that destination did not yield any results
    if (!result_found) {
    result_info.innerHTML = "Your trip to " + destination + ", " + start_time
        + " to " + end_time + ": did not return any results";
    }

}