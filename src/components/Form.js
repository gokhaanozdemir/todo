import React from 'react';
import { useStore } from '../useStore';

function Form() {
  const title = useStore(state => state.formState.title);
  const setTitle = useStore(state => state.setTitle);
  const comment = useStore(state => state.formState.comment);
  const setComment = useStore(state => state.setComment);
  const assignee = useStore(state => state.formState.assignee);
  const setAssignee = useStore(state => state.setAssignee);
  const status = useStore(state => state.formState.status);
  const setStatus = useStore(state => state.setStatus);
  const todos = useStore(state => state.todos);
  const addTodo = useStore(state => state.addTodo);
  return (
    <div className=" flex flex-col items-center  mt-36 ">
      <h1 className="text-3xl font-semibold font-sans text-[#dc2626] mb-8">Todos</h1>
      <input
        className="w-80  border-2 border-Blue-500 focus:border-Teal-600 text-midnight text-[#18181b] font-serif text-base indent-1  placeholder:text-[#9ca3af] placeholder:text-center italic outline-none"
        type="text"
        placeholder="What needs to be done ? "
        required
        value={title}
        onChange={setTitle}
      />
      <textarea
        className="w-80  border-2 border-Blue-500 focus:border-Teal-600 h-7 mt-3 bg-blue text-midnight font-serif text-base indent-1  placeholder:text-[#9ca3af] placeholder:text-center italic outline-none"
        placeholder="Add comment ?"
        required
        value={comment}
        onChange={setComment}
      ></textarea>
      <select
        className="w-80  mt-3 bg-white border-2 border-Blue-500 focus:border-Teal-600 text-midnight font-serif text-base text-center text-[#18181b] hover:text-[#be185d] italic outline-none"
        value={assignee}
        onChange={setAssignee}
      >
        <option value="Gökhan">Gökhan</option>
        <option value="Elif">Elif</option>
        <option value="Fatma">Fatma</option>
      </select>
      <select
        className="w-80  mt-3 bg-white border-2 border-Blue-500 focus:border-Teal-600 text-midnight font-serif text-base text-center text-[#18181b] hover:text-[#be185d] italic outline-none"
        value={status}
        onChange={setStatus}
      >
        <option className="bg-blue" value="New">
          New
        </option>
        <option value="WIP">WIP</option>
        <option value="Done">Done</option>
      </select>
      <button
        className="w-12 h-8 rounded-sm text-base mt-3 bg-Blue-600 hover:bg-Teal-500 border-Blue-600  text-white"
        value={todos}
        onClick={addTodo}
      >
        Ekle
      </button>
    </div>
  );
}
export default Form;
