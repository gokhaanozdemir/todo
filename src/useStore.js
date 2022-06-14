import create from 'zustand';
import { TodoStatus } from './constants';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      formState: {
        title: '',
        comment: '',
        assignee: ''
      },
      todos: [],
      searchQuery: '',
      isModalOpen: false,
      isEdit: false,

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

      setsearchQuery: e => {
        set(state => ({
          searchQuery: e.target.value
        }));
      },

      addTodo: () => {
        const todo = {
          ...get().formState,
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
      },

      deleteTodo: id => {
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      },
      handleClickEdit: todoId => {
        const todo = get().todos.find(todo => todo.id === todoId);
        set(state => ({
          isModalOpen: true,
          isEdit: true,
          formState: {
            ...state.formState,
            title: todo.title,
            comment: todo.comment,
            assignee: todo.assignee,
            status: todo.status
          }
        }));
      },

      upDateTodo: todoId => {
        set(state => ({
          isModalOpen: false,
          isEdit: false,
          todos: state.todos.map(todo => {
            if (todo.id === todoId) {
              return todo;
            }
            return {
              ...todo,
              ...state.formState
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
