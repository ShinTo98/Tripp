import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import "../styles/general.css";
import "../styles/trips.css";

const TripListRow = ({trip}) => {
  return (
    // <tr>
    //   <td><a href={course.watchHref} target="_blank">Watch</a></td>
    //   <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
    //   <td>{course.authorId}</td>
    //   <td>{course.category}</td>
    //   <td>{course.length}</td>
    // </tr>
    // should I use tr or regular div?
    <div className="trip">
      <img src={trip.image_address} alt=""/>
      <div className="trip-others-name">{trip.name}</div>
      <div className="trip-date">{trip.date}</div>
      <div className="trip-action-needed">{trip.action}</div>
      <div className="trip-progress">{trip.progress}</div>
      <div><a className="nav-text a-link-style" href="/schedule.htmlTODO">Schedule</a></div>
      <div><a className="nav-text a-link-style" href="/progress.htmlTODO">Progress</a></div>

      {/* // FIX THIS */}
      <button className="nav-text a-link-style" onClick="deleteTrip" toDelete={trip.name}>delete</button>
    </div>
  );
};

TripListRow.propTypes = {
  trip: PropTypes.object.isRequired
};

export default TripListRow;
