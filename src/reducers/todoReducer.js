import { FETCH_TIMERS_SUCCESS, CREATE_TIMER_SUCCESS } from '../actions/types';  

const initialState = {
  timers: {}
}

export default function(state=initialState, action) {
  console.log('reducer')
  switch (action.type) {
    case FETCH_TIMERS_SUCCESS:
      return Object.assign({}, state, {timers: action.payload});
    case CREATE_TIMER_SUCCESS:
      console.log('reducer create', action.payload)
      return Object.assign({}, state, {timers: state.timers.concat([action.payload]) });
    default:
      return state;
  }
}
