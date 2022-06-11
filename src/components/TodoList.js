import React from 'react';
import TodoItem from './TodoItem';
import { useStore } from '../useStore';

function TodoList() {
  const todos = useStore(state => state.todos);
  const toggleModal = useStore(state => state.toggleModal);
  const setsearchQuarey = useStore(state => state.setsearchQuarey);
  const searchQuarey = useStore(state => state.searchQuarey);

  return (
    <div className="flex items-center flex-col ">
      <input
        className=" outline-none  border-2 border-Orange-500 indent-8 bg-no-repeat bg-4 bg-left bg-search  mt-8 w-1/2 h-8 italic placeholder:indent-7 placeholder:text-[#9ca3af]"
        value={searchQuarey}
        onChange={setsearchQuarey}
        type="text"
        placeholder="İsim ara..."
      />
      {todos.length > 0 ? (
        todos
          .filter(
            item => item.title.toLowerCase().indexOf(searchQuarey.toLowerCase()) > -1
          )

          .map(todo => {
            return <TodoItem {...todo} key={todo.id} />;
          })
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
