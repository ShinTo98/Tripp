import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class DoubleHeader extends React.Component {
	render() {
		return (
			<div className="top-bar pic-text">
				<Link className="logo pic-text a-link-style" to="./index">Tripp</Link>
					<div className="double-page-title">
						<div className="first-title-line">Panning with 
							<span className="other-name"> Shantao</span>
						</div>
						<div className="second-title-line">
						<Link className="title-button-unselected pic-text a-link-style" to="/schedule">Schedule</Link>
							| 
						<Link className="title-button-unselected pic-text a-link-style" to="/progress">Progress</Link>
						</div>
					</div>

					<div className="user-info-container">
					<Link className="nav-text pic-text a-link-style opaque my-name" to="./profile">Tourist</Link>
					<div className="profile-pic-container">
						<Link to="./profile/shantao.yi@gmail.com">
							<img className="profile-pic" src="image/empty_profile_pic.png" alt=""/>
						</Link>
					</div>
				</div>
			</div>
		); 
	}

/*
	loadHeader = () => {
		let urlParams = new URLSearchParams(window.location.search); 
		let as = urlParams.get('as'); 
		let other = urlParams.get('other'); 
		let otherName = document.querySelector('.other-name'); 
		let myName = document.querySelector('.my-name'); 
		if (as != null) {
			myName.innerHTML = as; 
		} else {
			myName.innerHTML = header[0]['my-name']; 
		}
		if (other != null) {
			otherName.innerHTML = other; 
		} else {
			otherName.innerHTML = header[0]['other-name']; 
		}
	}
	*/
} 

export default DoubleHeader;
