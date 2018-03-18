import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tripActions from '../actions/tripActions';
import TripItem from "./TripItem";
import style from "../styles/trips.module.css";

class Trips extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trips: Object.assign([], props.trips) // doesn't work? using compoenentWillReceiveProps
    };
    this.removeTripItem = this.removeTripItem.bind(this);
  }

  // make props.trips pass into trips... weird
  componentWillReceiveProps(nextProps) {
    if (this.props.trips != nextProps.trips) {
      this.setState({trips: Object.assign([], nextProps.trips)});
    }
  }
  
  removeTripItem(id) {
    this.props.actions.deleteTrip(id)
      .then(() => {
        this.setState(state => {

            return {trips: state.trips.filter(trip => trip.id != id)};
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    const { trips } = this.state;
    
    return (
      <div id="main-frame">
        <div className={style.container}>
          {trips.map(trip =>
            <TripItem key={trip.name} trip={trip}
              removeTripItem={this.removeTripItem} />
          )}
        </div>
      </div>
    );
  }
}

Trips.propTypes = {
  trips: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tripActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
