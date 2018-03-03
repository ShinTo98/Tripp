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
          <a className="user-info-text" href="/profile.html">Tourist</a>
          <div className="profile-pic-container">
              <a href="/profile.html">
                  <img className="profile-pic" src={require("../../image/profile_pic/empty_profile_pic.png")} alt="empty"/>
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
