import React, {PropTypes} from 'react';

class DoubleHeader extends React.Component {
	render() {
		return (
			<div className="top-bar pic-text">
				<a className="logo pic-text a-link-style" href="./index">Tripp</a>
					<div className="double-page-title">
						<div className="first-title-line">Panning with 
							<span className="other-name"> Shantao</span>
						</div>
						<div className="second-title-line">
						<a className="title-button-unselected pic-text a-link-style" href="./schedule">Schedule</a>
							| 
						<a className="title-button-unselected pic-text a-link-style" href="./progress">Progress</a>
						</div>
					</div>

					<div className="user-info-container">
					<a className="nav-text pic-text a-link-style opaque my-name" href="./profile">Tourist</a>
					<div className="profile-pic-container">
						<a href="./profile">
							<img className="profile-pic" src="image/empty_profile_pic.png" alt=""/>
						</a>
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
