module.exports =  {
  path: '/test',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/test/index.jsx').default)
    })
  }
}

import React, { Component, PropTypes} from 'react';
import { Route } from "@reach/router";


class TestRoute extends Component {
  render (){
    return (
      <div>第三方的</div>
    );
  }
}
