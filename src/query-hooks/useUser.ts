import { useMutation } from '@tanstack/react-query';
import { chooseRole, login, register } from '../api/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};

export const useChooseRole = () => {
  return useMutation({
    mutationFn: chooseRole,
  });
};
