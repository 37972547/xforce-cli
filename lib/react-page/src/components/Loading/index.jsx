import React, { Component } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';

import './index.scss';

class Loading extends Component {
  render() {
    return (
      <Spin tip='LOADING' wrapperClassName='Loading_wrap' spinning={this.props.loading}>
        {this.props.children}
      </Spin>
    );
  }
};

function mapStateToProps(state) {
  return { loading: state.Layout.loading };
}

export default connect(mapStateToProps)(Loading);
