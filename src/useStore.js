import create from 'zustand';

export const useStore = create((set, get) => ({
  formState: {
    title: '',
    comment: '',
    assignee: '',
    status: ''
  },

  addCreate: null,
  todos: [],
  editTodoİd: null,

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
  }
    set(state => ({
      todos: [...get().todos,todo],
      formState: {
        title: '',
        comment: '',
        assignee: '',
        status: ''
      }
    }))}
}));
