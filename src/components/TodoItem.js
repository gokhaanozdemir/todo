import React from 'react';

import { TodoStatus } from '../constants';
import { useStore } from '../useStore';

function TodoItem(props) {
  const { title, comment, assignee, status, id } = props;
  const deleteTodo = useStore(state => state.deleteTodo);
  const setStatus = useStore(state => state.setStatus);
  const handleClickEdit = useStore(state => state.handleClickEdit);

  return (
    <div className=" mt-10 w-1/2  lg:w-48  p-1.5 justify-around  flex items-center border-2 border-Violet-500">
      <div className="flex flex-col ">
        <div className="font-bold  text-base">{title}</div>
        <div className="mt-4 ">{comment}</div>
      </div>
      <div className="flex flex-col">
        <select
          className="w-20 italic text-center"
          value={status}
          onChange={e => setStatus(id, e.target.value)}
        >
          {Object.values(TodoStatus).map(item => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
        <div className="mt-4 text-center">{assignee}</div>
      </div>

      <button
        className="w-8 h-8 rounded-sm text-base bg-Red-600   text-[#ffffff] border border-Red-600 italic"
        onClick={() => deleteTodo(id)}
      >
        Sil
      </button>

      <button
        className="w-16 h-8 rounded-sm text-base bg-Blue-600  hover:bg-Blue-400 border-Blue-600  text-white"
        onClick={() => handleClickEdit(id)}
      >
        Düzenle
      </button>
    </div>
  );
}

export default TodoItem;
