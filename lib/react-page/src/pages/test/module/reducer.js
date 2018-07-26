import { TEST_CONST } from './action';

let intailState = { test: 'hxllll' };

const ACTION_HANDLERS = {
  [TEST_CONST]: (state, action) => {
    return Object.assign({}, state, {test: action.testRes + ' xhlkkkk'});
  }
};

export default function testReducer (state = intailState, action) {
  if (ACTION_HANDLERS[action.type]) {
    return ACTION_HANDLERS[action.type](state, action);
  } else {
    return state;
  }
}

// export function test(state = {}) {
//   return state.test;
// }
