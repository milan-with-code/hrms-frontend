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

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface JoinCompanyPayload {
  companyName: string;
  companyCode: string;
}
