import create from "zustand";

export const useStore = create((set) => ({
  title: "",
  comment: null,
  assignee: null,
  status: null,
  todos: [],
  editTodoİd: null,
  handleChange: (e) => set((state) => ({ title: e.target.value })),
  setComment: (e) => set((state) => ({ comment: e.target.value })),
  setAssignee: (e) => set((state) => ({ assignee: e.target.value })),
  setStatus: (e) => set((state) => ({ status: e.target.value })),
}));
