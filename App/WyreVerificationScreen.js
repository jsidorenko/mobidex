import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WyreVerification from 'wyre-react-native-library';

class WyreVerificationScreen extends Component {
  render() {
    return (
      <WyreVerification
        apiKey={'AK-2EENE77W-X6YRC6VJ-8GTF73WL-QQ92BZ28'}
        network={this.props.network}
      />
    );
  }
}

WyreVerificationScreen.propTypes = {
  network: PropTypes.number.isRequired
};

export default connect(
  state => ({ ...state.settings }),
  dispatch => ({ dispatch })
)(WyreVerificationScreen);
