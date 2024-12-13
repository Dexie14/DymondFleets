

import { DriverDataItem } from "@/hooks/api/queries/drivers/useDriver";
import { TransDataItem } from "@/hooks/api/queries/transaction/useGetTrans";
import { UserDataItem } from "@/hooks/api/queries/user/useGetUsers";
import { create } from "zustand";

interface Identifiable {
  _id: string;
}

export interface SelectState<T extends Identifiable> {
  selectedItems: T[];
  addItem: (item: T) => void;
  removeItem: (itemId: string) => void;
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
        selectedItems: state.selectedItems.filter((i) => i._id !== itemId),
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


