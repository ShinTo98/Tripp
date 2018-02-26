import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div className="top-bar">
      <Link to ="/" activeClassName="active">
        <a className="logo pic-text a-link-style" href="/index.html">Tripp</a>
      </Link>
      <span className="page-title pic-text">BASE</span>
      
      <div className="user-info-container">
          <a className="nav-text pic-text a-link-style opaque" href="/profile.html">Tourist</a>
          <div className="profile-pic-container">
              <a href="/profile.html">
                  <img className="profile-pic" src="image/empty_profile_pic.png" alt=""/>
              </a>
          </div>
      </div>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
