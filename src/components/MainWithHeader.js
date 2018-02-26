// This component handles the MainWithHeader template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class MainWithHeader extends React.Component {
  render() {
    return (
      <div>
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

MainWithHeader.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(MainWithHeader);
