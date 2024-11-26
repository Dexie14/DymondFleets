import { RideDataItem } from "@/components/Rides/RideTable";
import { create } from "zustand";

interface SelectState {
  selectedItems: RideDataItem[];
  addItem: (item: RideDataItem) => void;
  removeItem: (itemId: number) => void;
  selectAll: (items: RideDataItem[]) => void;
  clearAll: () => void;
}

export const useSelectStore = create<SelectState>((set) => ({
  selectedItems: [],
  addItem: (item) =>
    set((state) => ({
      selectedItems: [...state.selectedItems, item],
    })),
  removeItem: (itemId) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((i) => i.id !== itemId),
    })),
  selectAll: (items) =>
    set({
      selectedItems: items,
    }),
  clearAll: () =>
    set({
      selectedItems: [],
    }),
}));
