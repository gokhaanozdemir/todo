import create from 'zustand';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const useStore = create((set, get) => ({
  formState: {
    title: '',
    comment: '',
    assignee: '',
    status: ''
  },
  isFormOpen: false,
  addCreate: null,
  todos: [],
  editTodoİd: null,

  setForm: () =>
    set(state => ({
      isFormOpen: true
    })),

    deleteTodo: (id) => 
    set(state => ({
      todos: get().todos.filter((todo) => todo.id !== id)
    })),
    

  setTitle: e =>
    set(state => ({
      formState: {
        ...state.formState,
        title: e.target.value
      }
    })),

  setComment: e =>
    set(state => ({
      formState: {
        ...state.formState,
        comment: e.target.value
      }
    })),

  setAssignee: e =>
    set(state => ({
      formState: {
        ...state.formState,
        assignee: e.target.value
      }
    })),
  setStatus: e =>
    set(state => ({
      formState: {
        ...state.formState,
        status: e.target.value
      }
    })),

  addTodo: () => {
    const todo = {
      ...get().formState,
      id: Math.random(),
      addCreate: new Date()
    };
    set(state => ({
      todos: [...get().todos, todo],
      formState: {
        title: '',
        comment: '',
        assignee: '',
        status: ''
      },
      isFormOpen: false
    }));
  }
}));
