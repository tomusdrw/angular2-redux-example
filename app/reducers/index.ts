
const initialState = {
  todos: []
};

export function rootReducer (state = initialState, action = null) {
  console.log(state, action);
  return Object.assign({}, state);
}
