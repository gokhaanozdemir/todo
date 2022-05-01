import React from 'react';
import TodoItem from './TodoItem';
import { useStore } from '../useStore';

function TodoList() {
  const todos = useStore(state => state.todos);
  const toggleModal = useStore(state => state.toggleModal);

  return (
    <div>
      {todos.length > 0 ? (
        todos.map(todo => {
          return <TodoItem {...todo} key={todo.id} />;
        })
      ) : (
        <span>No todos yet</span>
      )}
      <button onClick={() => toggleModal(true)}>Todo Ekle</button>
    </div>
  );
}

export default TodoList;
