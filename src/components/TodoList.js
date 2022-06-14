import React from 'react';
import TodoItem from './TodoItem';
import { useStore } from '../useStore';
import Searchbox from './Searchbox';
function TodoList(props) {
  const todos = useStore(state => state.todos);
  const toggleModal = useStore(state => state.toggleModal);
  const fieldsToSearch = ['title'];
  const searchQuery = useStore(state => state.searchQuery);

  return (
    <div className="flex items-center flex-col ">
      {todos.length > 0 ? (
        <>
          <Searchbox />
          {todos
            .filter(
              item =>
                item[fieldsToSearch].toLowerCase().indexOf(searchQuery.toLowerCase()) >
                -1
            )
            .map(todo => {
              return <TodoItem {...todo} key={todo.id} />;
            })}
        </>
      ) : (
        <span className="flex justify-center mt-72 text-base text-[#dc2626]">
          Henüz yapılacak iş yok!
        </span>
      )}

      <div className="relative left-96 bottom-10">
        <button
          className="w-14 h-12 lg:relative right-96 bottom-96 rounded-sm text-base bg-Teal-600  hover:bg-Teal-400 border-Teal-600  text-white "
          onClick={() => toggleModal(true)}
        >
          Todo ekle
        </button>
      </div>
    </div>
  );
}

export default TodoList;
