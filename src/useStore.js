import create from 'zustand';

import { TodoStatus } from './constants';

export const useStore = create((set, get) => ({
  formState: {
    title: '',
    comment: '',
    assignee: ''
  },
  todos: [],
  editTodoId: null,
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

  addTodo: todoData => {
    if (todoData.id) {
      set(state => ({
        todos: state.todos.map(todo => {
          if (todo.id !== todoData.id) {
            return todo;
          }
          return {
            ...todo,
            ...todoData
          };
        }),
        isModalOpen: false
      }));
    } else {
      const todo = {
        ...get().formState,
        ...todoData,
        id: Math.random(),
        createdAt: new Date(),
        status: TodoStatus.New.value
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
    }
  },

  editTodo: id => {
    set(state => ({
      editTodoId: id,
      isModalOpen: true
    }));
  },

  deleteTodo: id => {
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  },

  setStatus: (id, value) => {
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }

        return { ...todo, status: value };
      })
    }));
  }
}));
