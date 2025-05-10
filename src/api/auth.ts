import type { LoginPayload, RegisterPayload } from '../types/auth';
import axiosInstance from './axiosInstance';

export const login = async ({ email, password }: LoginPayload) => {
  const response = await axiosInstance.post('user/login', { email, password });
  return response.data;
};

export const register = async (data: RegisterPayload) => {
  const response = await axiosInstance.post('user/register', data);
  return response;
};
export const chooseRole = async (role: string) => {
  console.log('role :>> ', role);
  const response = await axiosInstance.post(
    'user/update-role',
    { role },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  return response;
};
