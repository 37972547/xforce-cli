/**
 * Created by luojianzong on 2017/6/9.
 */

// ------------------------------------
// Constants
// ------------------------------------

export const TEST_CONST = 'TEST_CONST';

// ------------------------
// function
// -------------------------

// ------------------------------------
// Actions
// ------------------------------------

export function testAction() {
  console.log('value', value);
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          dispatch({
            type: TEST_CONST,
            testRes: 'value'
          });
          resolve('ljz');
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    })
  }
}

export const actions = {
  testAction
};

// ------------------------------------
// Action Handlers
// ------------------------------------
