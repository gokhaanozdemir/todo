import create from 'zustand';
import { persist } from 'zustand/middleware';

import { TodoStatus } from './constants';

export const useStore = create(
  persist(
    (set, get) => ({
      formState: {
        title: '',
        comment: '',
        assignee: ''
      },
      todos: [],
      isModalOpen: false,
      editTodoId: null,

      toggleModal: value => {
        set(() => ({
          isModalOpen: value
        }));
      },

      setFormState: (e, field) => {
        set(state => ({
          formState: {
            ...state.formState,
            [field]: e.target.value
          }
        }));
      },

      resetFormState: () => {
        set(() => ({
          formState: {
            title: '',
            comment: '',
            assignee: '',
            status: ''
          }
        }));
      },

      addTodo: () => {
        const todo = {
          id: Math.random(),
          createdAt: new Date(),
          status: TodoStatus.New.value,
          ...get().formState
        };

        set(() => ({
          todos: [...get().todos, todo],
          isModalOpen: false
        }));

        get().resetFormState();
      },

      deleteTodo: id => {
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      },

      handleClickAdd: () => {
        set(() => ({
          isModalOpen: true,
          editTodoId: null
        }));

        get().resetFormState();
      },

      handleClickEdit: todoId => {
        const todo = get().todos.find(todo => todo.id === todoId);

        set(state => ({
          isModalOpen: true,
          editTodoId: todoId,
          formState: {
            ...state.formState,
            title: todo.title,
            comment: todo.comment,
            assignee: todo.assignee,
            status: todo.status
          }
        }));
      },

      updateTodo: () => {
        set(state => ({
          isModalOpen: false,
          editTodoId: null,
          todos: state.todos.map(todo => {
            if (todo.id !== get().editTodoId) {
              return todo;
            }

            return {
              ...todo,
              ...state.formState
            };
          })
        }));

        get().resetFormState();
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
    }),

    {
      name: 'todo',
      getStorage: () => localStorage
    }
  )
);
