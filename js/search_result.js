'use strict';

let results = [
    {
        'name': 'Cheng',
        'image_address': 'cheng_hangzhou.jpg',
        'description': 'Look! I can also be a tour guide here in Hangzhou. It is a truly beautiful city. I am also pretty good at casino.'
    },
    {
        'name': 'Shantao',
        'image_address': 'shantao_casino.png',
        'description': 'I am great at casino!'
    },
    {
        'name': 'Chao',
        'image_address': 'chao_great.jpeg',
        'description': 'I am cool and I will be a great tour guide for you!'
    },
    {
        'name': 'Sherlock',
        'image_address': 'sherlock.jpg',
        'description': 'Anderson, don\'t talk out loud. You lower the IQ of the whole street.'
    },
    {
        'name': 'John',
        'image_address': 'john.jpeg',
        'description': 'Alright, alright. Girls. Calm down.'
    },
    {
        'name': 'Moriarty',
        'image_address': 'moriarty.jpg',
        'description': 'That\'s what people do!'
    },
    {
        'name': 'Eurus',
        'image_address': 'eurus.jpg',
        'description': 'I\'m Eurus. Silly name, isn\'t it? Greek. Means “the east wind”. My parents loved silly names, like Eurus… or Mycroft… or Sherlock. Oh, look at him. Didn\'t it ever occur to you, not even once, that Sherlock\'s secret brother might just be Sherlock\'s secret sister? Huh? He\'s making a funny face. I think I\'ll put a hole in it.'
    },
    
];

function loadResults() {
	let result_container = document.getElementsByClassName('result-container')[0];
    console.log(result_container);
    
    results.forEach( (result) => {
        let result_div = document.createElement('div');
        result_div.className = 'result'; //('class', 'result');

        let image = document.createElement('img');
        image.setAttribute('src', 'image/searchresult/' + result['image_address']);
        image.setAttribute('alt', '');

        let name = document.createElement('p');
        name.setAttribute('class', 'result-name');
        name.innerHTML = result['name'];
        
        let description = document.createElement('p');
        description.setAttribute('class', 'result-description');
        description.innerHTML = result['description'];
        
        let a = document.createElement('a');
        a.setAttribute('class', 'nav-text pic-text a-link-style button-color');
        a.setAttribute('href', '/progress.html');
        a.innerHTML = 'Connect';

        result_div.appendChild(image);
        result_div.appendChild(name);
        result_div.appendChild(description);
        result_div.appendChild(a);

        result_container.appendChild(result_div);
    });
    
}