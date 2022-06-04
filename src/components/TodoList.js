import React from 'react';
import TodoItem from './TodoItem';
import { useStore } from '../useStore';

function TodoList() {
  const todos = useStore(state => state.todos);
  const toggleModal = useStore(state => state.toggleModal);

  return (
    <div className="flex items-center flex-col ">
      {todos.length > 0 ? (
        todos.map(todo => {
          return <TodoItem {...todo} key={todo.id} />;
        })
      ) : (
        <span className="flex justify-center mt-72 text-base text-[#dc2626]">
          Henüz yapılacak iş yok!
        </span>
      )}

      <div className="relative left-96 bottom-10">
        <button
          className=" w-14 h-12 rounded-sm text-base bg-Teal-600  hover:bg-Teal-400 border-Teal-600  text-white "
          onClick={() => toggleModal(true)}
        >
          Todo ekle
        </button>
      </div>
    </div>
  );
}

export default TodoList;
