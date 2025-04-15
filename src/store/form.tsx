import { create } from 'zustand';

interface FormState {
  password: string;
  email: string;
  isAuthenticated : boolean;
  setEmail : (email : string) => void;
  setPassword : (password : string) => void;
  resetForm: () => void;
  setIsAuthenticated: (mean: boolean) => void;
}

export const useFormStore = create<FormState>((set) => ({
  password: '',
  email: '',
  isAuthenticated : false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setIsAuthenticated: (mean) => set({isAuthenticated : mean}),
  resetForm: () => set({ email: '', password: '' }),
}));