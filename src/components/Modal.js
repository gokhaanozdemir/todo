import React from 'react';
import { useStore } from '../useStore';
function Modal() {
  const setForm = useStore(state => state.setForm);
  const isFormOpen = useStore(state => state.isFormOpen);
  return (
    <div>
      <button onClick={setForm}>Modal Aç</button>
      <Modal isOpen={isFormOpen}></Modal>
    </div>
  );
}
export default Modal;
