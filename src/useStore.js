import create from 'zustand';

export const useStore = create((set, get) => ({
  formState: {
    title: '',
    comment: '',
    assignee: null,
    status: null
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
  addTodo: () => set(state => ({ todos: [...get().todos, state.formState] }))
}));
