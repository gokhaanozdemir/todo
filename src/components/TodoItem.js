import React from 'react';

function TodoItem(props) {
  const { title, comment, assignee, status } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h1>{comment}</h1>
      <h1>{status}</h1>
      <h1>{assignee}</h1>
    </div>
  );
}
export default TodoItem;
