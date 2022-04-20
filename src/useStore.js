import create from 'zustand';

export const useStore = create(set => ({
  text: "",
  handleChange: (e) => set((state) => ({ text: e.target.value  }))
}));