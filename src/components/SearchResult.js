import React, {PropTypes} from 'react';
import SearchResultItem from "./SearchResultItem";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import style from "../styles/search_result.module.css";

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: Object.assign([], props.results),
            destination: undefined,
            start_time: undefined,
            end_time: undefined,
            result_found: false
        };
    }
    
    componentWillMount() {
        let urlParams = new URLSearchParams(window.location.search);

        // use the d so results does not depends on this.state.destination
        // to calculate the filtered resultms
        let d = urlParams.get('destination');
        this.setState({
            destination: d,
            start_time: urlParams.get('start-time'),
            end_time: urlParams.get('end-time'),
            results: this.state.results.filter(
                guide => guide.locations.includes(d)
            )
        });
    }

    // make props.results pass into results... weird
    componentWillReceiveProps(nextProps) {

        if (this.state.results.length == 0) {
            let newResults = Object.assign([], nextProps.results);
            newResults = newResults.filter(guide => guide.locations.includes(this.state.destination));
            this.setState({results: newResults});
        }
    }

    render() {
        return (
            <div id="main-frame">
                <div className={style.container}>
                
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

SearchResult.propTypes = {
    results: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        results: state.guides
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);