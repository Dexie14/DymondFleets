import { createStore } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

export interface AuthData {
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

interface AuthState {
  accessToken: string | null;
  currentUser: AuthData | null;
  setAccessToken: (token: string | null) => void;
  setCurrentUser: (user: AuthData | null) => void;
  logout: () => void;
}

const authStore = createStore<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      currentUser: null,
      setAccessToken: (token) => set({ accessToken: token }),
      setCurrentUser: (user) => set({ currentUser: user }),
      logout: () => set({ accessToken: null, currentUser: null }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthStore = authStore.getState;