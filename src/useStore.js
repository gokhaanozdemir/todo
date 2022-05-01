import create from 'zustand';

export const useStore = create((set, get) => ({
  formState: {
    title: '',
    comment: '',
    assignee: ''
  },
  todos: [],
  editTodoİd: null,
  isModalOpen: false,

  toggleModal: value => {
    set(() => ({
      isModalOpen: value
    }));
  },

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
      createdAt: new Date(),
      status: 'new'
    };

    set(() => ({
      todos: [...get().todos, todo],
      formState: {
        title: '',
        comment: '',
        assignee: '',
        status: ''
      },
      isModalOpen: false
    }));
  },

  deleteTodo: id =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
}));
