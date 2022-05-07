import React from 'react';

import { TodoStatus } from '../constants';
import { useStore } from '../useStore';

function TodoItem(props) {
  const { title, comment, assignee, status, id } = props;
  const deleteTodo = useStore(state => state.deleteTodo);
  const setStatus = useStore(state => state.setStatus);
  const editTodo = useStore(state => state.editTodo);

  return (
    <div className=" w-1/2  p-1.5 justify-around  flex items-center border-2 border-Red-600">
      <div className="flex flex-col ">
        <div className="font-bold  text-base">{title}</div>
        <div className="mt-4">{comment}</div>
      </div>
      <div className="flex flex-col">
        <select
          className="w-20 "
          value={status}
          onChange={e => setStatus(id, e.target.value)}
        >
          {Object.values(TodoStatus).map(item => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
        <div className="mt-4">{assignee}</div>
      </div>

      <button
        className="w-8 h-8 rounded-sm text-base bg-Red-600   text-[#ffffff] border border-Red-600 italic"
        onClick={() => deleteTodo(id)}
      >
        Sil
      </button>
      <button
        onClick={() => editTodo(id)}
        className="w-16 h-8 rounded-sm text-base bg-Blue-600  hover:bg-Blue-400 border-Blue-600  text-white"
      >
        Düzenle
      </button>
    </div>
  );
}

export default TodoItem;
