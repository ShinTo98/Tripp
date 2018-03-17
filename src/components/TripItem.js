import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import style from "../styles/trips.module.css";

const TripItem = ({trip, removeTripItem}) => {
  return (
    <div className="style.trip">
      <img src={require("../image/profile_pic/" + trip.image_address)} alt=""/>
      <div>{trip.name}</div>
      <div>{trip.date}</div>
      <div className="style.action-needed">{trip.action}</div>
      <div>{trip.progress}</div>

      {/* TODO fix the hardcoded tourist */}
      <Link className="nav-text a-link-style"
        to={"/schedule?other=" + trip.name + "&as=" + "tourist"}>Schedule</Link>
      <Link className="nav-text a-link-style"
        to={"/progress?other=" + trip.name + "&as=" + "tourist"}>Progress</Link>

      <span className="nav-text" onClick={() => {removeTripItem(trip.name);}}>
        end trip</span>
    </div>
  );
};

TripItem.propTypes = {
  trip: PropTypes.object.isRequired,
  removeTripItem: PropTypes.object.isRequired
};

export default TripItem;
