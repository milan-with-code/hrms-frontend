import type { UseFormRegisterReturn } from 'react-hook-form';

export type Role = 'admin' | 'employee';

export interface User {
  name: string;
  email: string;
  role: Role;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export interface LoginInputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: string;
}
export interface RegisterInputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export interface InputFiledArrayProps {
  label: string;
  placeholder: string;
  type: string;
}
