import React from 'react';
import "../styles/search_result.css";
import SearchResultItem from "./SearchResultItem";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        // const { destination, start_time, end_time } = props;
        this.state = {
            results: [],
            destination: undefined, //destination,
            start_time: undefined, //start_time,
            end_time: undefined, //end_time,
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
                        this.state.results.map(result =>
                            <SearchResultItem key={result.name} result={result}/>)
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    
    // get only those guides in the location as results
    // let results = state.guides.filter(guide => 
    //     guide.locations.includes(this.state.destination));

    return {
        results: state.guides // BUGGG TODO
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(tripActions, dispatch) // TODO
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);