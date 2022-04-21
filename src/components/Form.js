import React from "react";
import { useStore } from "zustand";
function Form() {
  const title = useStore((state) => state.title);
  const handleChange = useStore((state) => state.handleChange);
  const comment = useStore((state) => state.comment);
  const setComment = useStore((state) => state.setComment);
  const assignee = useStore((state) => state.assignee);
  const setAssignee = useStore((state) => state.setAssignee);
  const status = useStore((state) => state.status);
  const setStatus = useStore((state) => state.setStatus);
  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <textarea value={comment} onChange={setComment}></textarea>
      <select value={assignee} onChange={setAssignee}>
        <option value="Gökhan"></option>
        <option value="Elif"></option>
        <option value="Fatma"></option>
      </select>
      <select value={status} onChange={setStatus}>
        <option value="New">New</option>
        <option value="WIP">WIP</option>
        <option value="Done">Done</option>
      </select>

      <button>Ekle</button>
    </div>
  );
}
export default Form;
