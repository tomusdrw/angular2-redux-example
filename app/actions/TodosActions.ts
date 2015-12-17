export function addTodo (val : string) {
  return {
    type: 'ADD_TODO',
    payload: {
      title: val
    }
  };
} 
