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
          <Link className="user-info-text" to="/profile">Tourist</Link>
          <div className="profile-pic-container">
              <Link to="/profile">
                  <img className="profile-pic" src={require("../../image/profile_pic/empty_profile_pic.png")} alt="empty"/>
              </Link>
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
