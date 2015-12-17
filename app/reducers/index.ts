
const initialState = {
  todos: []
};

export default function (state = initialState, action = null) {
  console.log(state, action);
  return Object.assign({}, state);
}
