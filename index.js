import deepFreeze from 'deep-freeze';
import { combineReducers as reduxCombineReducers } from 'redux';

export const safeReducer = reducer => (
  (state, action) => deepFreeze( 
    reducer( state && deepFreeze(state), action && deepFreeze(action) )
  )
);

export const freeze = deepFreeze;
export const combineReducers = reducers => reduxCombineReducers(
  Object.keys(reducers).reduce(
    (r, b) => (r[b] = safeReducer(reducers[b]), r), {}
  )
);
