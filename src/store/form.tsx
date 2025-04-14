import { create } from 'zustand';

interface FormState {
  password: string;
  email: string;
  isAuthenticated : boolean;
  setEmail : (email : string) => void;
  setPassword : (password : string) => void;
  resetForm: () => void;
  setIsAuthenticated: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  password: '',
  email: '',
  isAuthenticated : false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setIsAuthenticated: () => set({isAuthenticated : true}),
  resetForm: () => set({ email: '', password: '' }),
}));