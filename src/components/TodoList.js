import React from 'react';
import TodoItem from './TodoItem';
import { useStore } from '../useStore';

function TodoList() {
  const todos = useStore(state => state.todos);
  console.log(todos)
  return (
    <div>
      {todos.map(todo => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </div>
  );
}
export default TodoList;
