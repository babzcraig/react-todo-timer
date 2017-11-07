
const initialState = {
  todos: {}
}

export default function(state=initialState, action) {

  switch (action.type) {
    // case LOG_IN_SUCCESS:
    //   return Object.assign({}, state, {user: action.payload});
    default:
      return state;
  }
}
