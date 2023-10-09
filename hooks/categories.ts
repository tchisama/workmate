import create from 'zustand';

const useCatStore = create<{ category: number, setCategory: (cat: number) => void}>((set) => ({
  category: 0,
  setCategory: (cat: number) => set({ category:cat }),
}));

export default useCatStore;
