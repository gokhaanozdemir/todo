import React from 'react';
import Modal from 'react-modal';

import { useStore } from '../useStore';

Modal.setAppElement('#root');

function Form() {
  const title = useStore(state => state.formState.title);
  const setTitle = useStore(state => state.setTitle);
  const comment = useStore(state => state.formState.comment);
  const setComment = useStore(state => state.setComment);
  const assignee = useStore(state => state.formState.assignee);
  const setAssignee = useStore(state => state.setAssignee);
  const addTodo = useStore(state => state.addTodo);
  const toggleModal = useStore(state => state.toggleModal);
  const isModalOpen = useStore(state => state.isModalOpen);
  const updateTodo = useStore(state => state.updateTodo);
  const editTodoId = useStore(state => state.editTodoId);

  return (
    <Modal
      className="outline-none w-full h-full bg-Slate-400"
      isOpen={isModalOpen}
      onRequestClose={() => toggleModal(false)}
    >
      <div className=" flex justify-end mr-2 ">
        <button
          onClick={() => toggleModal(false)}
          className=" w-8 text-2xl font-bold text-[#fff] shadow-md shadow-Red-600 rounded-2xl bg-Orange-500"
        >
          X
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-24 text-3xl font-semibold font-sans text-[#fff] mb-8">
          Yapılacaklar Listesi
        </h1>
        <input
          className="w-80 border-2 border-Blue-500 focus:border-Teal-600 text-midnight text-[#18181b] font-serif text-base indent-1 placeholder:text-[#9ca3af] placeholder:text-center italic outline-none"
          type="text"
          placeholder="Ne yapılması gerekiyor?"
          required
          value={title}
          onChange={setTitle}
        />
        <textarea
          className="w-80 border-2 border-Blue-500 focus:border-Teal-600 h-7 mt-3 bg-blue text-midnight font-serif text-base indent-1  placeholder:text-[#9ca3af] placeholder:text-center italic outline-none"
          placeholder="Yorum ekle"
          required
          value={comment}
          onChange={setComment}
        ></textarea>
        <select
          className="w-80  mt-3 bg-white border-2 border-Blue-500 focus:border-Teal-600 text-midnight font-serif text-base text-center text-[#18181b] hover:text-[#be185d] italic outline-none"
          value={assignee}
          onChange={setAssignee}
        >
          <option value="" disabled hidden>
            Lütfen seçiniz
          </option>
          <option value="Gökhan">Gökhan</option>
          <option value="Elif">Elif</option>
          <option value="Fatma">Fatma</option>
        </select>

        <button
          className={`h-8 rounded-sm text-base mt-3 bg-Blue-600 hover:bg-Teal-500 border-Blue-600 text-white ${
            editTodoId ? 'w-14' : 'w-12'
          }`}
          onClick={editTodoId ? updateTodo : addTodo}
        >
          {editTodoId ? 'Kaydet' : 'Ekle'}
        </button>
      </div>
    </Modal>
  );
}

export default Form;
