import { FETCH_TIMERS_SUCCESS } from '../actions/types';  

const initialState = {
  timers: {}
}

export default function(state=initialState, action) {
  console.log('reducer')
  switch (action.type) {
    case FETCH_TIMERS_SUCCESS:
      console.log('reducer fetch')
      return Object.assign({}, state, {timers: action.payload});
    default:
      return state;
  }
}
