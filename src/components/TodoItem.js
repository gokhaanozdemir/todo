import React from 'react';
import { useStore } from '../useStore';

function TodoItem(props) {
  const { title, comment, assignee, status, id } = props;
  const deleteTodo = useStore(state => state.deleteTodo);

  return (
    <div className="flex justify-center mt-4">
      <ul>
        <li className=" w-1/2 border-1 border-Gray-600">{title}</li>
        <li>{comment}</li>
        <li>{assignee}</li>
        <li>{status} </li>
      </ul>

      <button className="border-2 border-Blue-900" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
