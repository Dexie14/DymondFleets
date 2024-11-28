import { DriverDataItem } from "@/components/Driver/DriverTable";
import { TransDataItem } from "@/components/Transactions/TransTable";
import { UserDataItem } from "@/components/User/UserTable";
import { create } from "zustand";

interface Identifiable {
  id: number;
}

export interface SelectState<T extends Identifiable> {
  selectedItems: T[];
  addItem: (item: T) => void;
  removeItem: (itemId: number) => void;
  selectAll: (items: T[]) => void;
  clearAll: () => void;
}

export function createSelectStore<T extends Identifiable>() {
  return create<SelectState<T>>((set) => ({
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
}

export const useTransSelectStore = createSelectStore<TransDataItem>();
export const useUsersSelectStore = createSelectStore<UserDataItem>();
export const useDriverSelectStore = createSelectStore<DriverDataItem>();


