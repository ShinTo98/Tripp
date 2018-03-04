// This component handles the DoubleHeader template used on every page.
import React, {PropTypes} from 'react';
import DoubleHeader from './common/DoubleHeader';
import {connect} from 'react-redux';

class MainWithDoubleHeader extends React.Component {
  render() {
    return (
      <div>
        <DoubleHeader
        />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainWithDoubleHeader.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(MainWithDoubleHeader);
