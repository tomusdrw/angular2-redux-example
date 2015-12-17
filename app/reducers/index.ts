
const initialState = {
  todos: [
    {
      title: 'Hello1'
    },
    {
      title: 'Hello2'
    }
  ]
};

export function rootReducer (state = initialState, action = null) {
  console.log(state, action);

  if (action.type === 'ADD_TODO') {
    return Object.assign(
      {},
      state,
      {
        todos: [action.payload].concat(state.todos)
      }
    );
  }
  return Object.assign({}, state);
}
