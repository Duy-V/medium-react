import { create } from "zustand";
type TTagsState = {
  selectedTags: string[];
};
type TTagsActions = {
  setSelectedTags: (tag: string) => void;
};
export type TTagsStore = TTagsState & TTagsActions;
export const useTagsStore = create<TTagsStore>((set) => ({
  selectedTags: [],
  setSelectedTags: (tag) =>
    set((prev) => ({
     selectedTags: prev.selectedTags.includes(tag) ? prev.selectedTags.filter((t)=>t !==tag) : [...prev.selectedTags, tag],
    })),
}));
