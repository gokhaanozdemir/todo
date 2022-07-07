import create from 'zustand';
import { persist } from 'zustand/middleware';

import { TodoStatus } from './constants';

export const useStore = create(
  persist(
    (set, get) => ({
      todos: [],
      isModalOpen: false,
      editTodoId: null,

      toggleModal: value => {
        set(() => ({
          isModalOpen: value
        }));
      },

      addTodo: data => {
        const todo = {
          id: Math.random(),
          createdAt: new Date(),
          status: TodoStatus.New.value,
          ...data
        };

        set(() => ({
          todos: [...get().todos, todo],
          isModalOpen: false
        }));
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
      },

      handleClickEdit: todoId => {
        set(() => ({
          isModalOpen: true,
          editTodoId: todoId
        }));
      },

      updateTodo: data => {
        set(state => ({
          isModalOpen: false,
          editTodoId: null,
          todos: state.todos.map(todo => {
            if (todo.id !== get().editTodoId) {
              return todo;
            }

            return {
              ...todo,
              ...data
            };
          })
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
    }),

    {
      name: 'todo',
      getStorage: () => localStorage
    }
  )
);
