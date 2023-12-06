import { create } from "zustand";

type SlugStoreState = {
  selectedArticle: string | null;
};

type SlugStoreActions = {
  setSelectedArticle: (article: string) => void;
};

const useSlugStore = create<SlugStoreState & SlugStoreActions>((set) => ({
    selectedArticle: null,
  setSelectedArticle: (slug: string) => {
    set({ selectedArticle: slug });
  },
}));

export default useSlugStore;
