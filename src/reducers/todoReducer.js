export function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return [...todos, action.todo];
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
