import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TripItem from "./TripItem";
import style from "../styles/trips.module.css";

class Trips extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trips: Object.assign([], props.trips)
    };
    this.removeTripItem = this.removeTripItem.bind(this);
  }

  removeTripItem(id) {
    this.setState(state => ({
      trips: state.trips.filter(trip => trip.id != id )
    }));
  }

  render() {
    const { trips } = this.props;

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
  trips: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  
  return {
      trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);