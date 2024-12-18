
import { create } from "zustand";

interface RegistrationState {
  formData: {
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    mobileNumber: string;
    password: string;
    riderType: string;
  };
  setFormData: (data: RegistrationState['formData']) => void;
  resetFormData: () => void;
}

export const useRegistrationStore = create<RegistrationState>((set) => ({
  formData: {
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    password: "",
    riderType: "",
  },
  setFormData: (data) => set({ formData: data }),
  resetFormData: () => set({ formData: {
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    password: "",
    riderType: "",
  }}),
}));
