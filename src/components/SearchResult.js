import React from 'react';
import "../styles/search_result.css";
import SearchResultItem from "./SearchResultItem";

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [
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
            }],
            destination: "",
            start_time: "",
            end_time: "",
            result_found: false
        };
    }
    
    componentWillMount() {
        let urlParams = new URLSearchParams(window.location.search);
        this.setState({
            destination: urlParams.get('destination'),
            start_time: urlParams.get('start-time'),
            end_time: urlParams.get('end-time')
        });
    }

    render() {
        return (
            <div id="main-frame">
                <div className="result-container">
                
                <div>Your trip to {this.state.destination}
                    : here are the available tour guides for you
                </div>
                {
                    this.state.results.map(result => {
                        if (!result.locations.includes(this.state.destination)) return;
                        this.state.result_found = true; // using setState will cause render to call render
                        return <SearchResultItem key={result.name} result={result}/>;
                    })
                }
                </div>
            </div>
        );
    }
}

export default SearchResult;
