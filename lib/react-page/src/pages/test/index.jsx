import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {actions} from './module/action';

class Test extends Component {
  constructor(props) {
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler () {
    this.props.testAction();
  }

  render() {
    return (
      <div >
        <span>{this.props.test}</span>
        <button onClick={this.buttonHandler}>button</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {test: state.test.test}
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: bindActionCreators(actions.testAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
