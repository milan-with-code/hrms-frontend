import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (): Promise<User> => {
  const response = await axiosInstance.get('/user');
  return response.data;
};

export const useUser = () => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
};
