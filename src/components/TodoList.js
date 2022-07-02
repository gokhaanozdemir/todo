import React from 'react';
import { useSearchParams } from 'react-router-dom';

import TodoItem from './TodoItem';
import { useStore } from '../useStore';
import Searchbox from './Searchbox';

function TodoList() {
  const todos = useStore(state => state.todos);
  const toggleModal = useStore(state => state.toggleModal);
  const fieldsToSearch = ['title'];
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || "";

  return (
    <>
      <div className="flex flex-col items-center">
        {todos.length > 0 ? (
          <>
            <Searchbox />
            {todos
              .filter(todo => {
                return fieldsToSearch.some(field => {
                  return (
                    todo[field].toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
                  );
                });
              })
              .map(todo => {
                return <TodoItem {...todo} key={todo.id} />;
              })}
          </>
        ) : (
          <span className="flex justify-center mt-72 text-base text-[#dc2626]">
            Henüz yapılacak iş yok!
          </span>
        )}
      </div>
      <div className=" max-h-10 flex justify-end  items-center  mr-12  ">
        <button
          className=" w-12 h-12  rounded bg-Cyan-500 hover:bg-Sky-700 text-base text-white shadow-Teal-500"
          onClick={() => toggleModal(true)}
        >
          Todo ekle
        </button>
      </div>
    </>
  );
}

export default TodoList;
