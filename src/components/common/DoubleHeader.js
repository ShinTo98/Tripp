import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const DoubleHeader = ({loading}) => {
  	return (
		<div class="top-bar pic-text">
			<a class="logo pic-text a-link-style" href="./index.html">Tripp</a>
				<div class="double-page-title">
					<div class="first-title-line">Panning with
						<span class="other-name">[name...] </span>
					</div>
					<div class="second-title-line">
					<a class="title-button-selected pic-text a-link-style" href="./schedule.html">Schedule</a>
						| 
					<a class="title-button-unselected pic-text a-link-style" href="./progress.html">Progress</a>
				</div>
				</div>

				<div class="user-info-container">
				<a class="nav-text pic-text a-link-style opaque my-name" href="./profile.html">Tourist</a>
				<div class="profile-pic-container">
					<a href="./profile.html">
						<img class="profile-pic" src="image/empty_profile_pic.png" alt=""/>
					</a>
				</div>
			</div>
		</div>
  	);
};

export default DoubleHeader;
