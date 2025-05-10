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
