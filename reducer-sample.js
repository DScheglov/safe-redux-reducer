import { safeReducer } from './index';
const initialState = {
  x: 0,
  y: 0
};

const AT_REVERSE = 'AT_REVERSE';

export const vectors = safeReducer( 
  (state = initialState, action) => {

  switch (action.type) {
    case AT_REVERSE:
      return { x: -state.x, y: -state.y };

    default:
      return state;
  }

});