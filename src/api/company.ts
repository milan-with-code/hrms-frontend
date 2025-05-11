import type { JoinCompanyPayload } from '../types/auth';
import axiosInstance from './axiosInstance';

export const joinCompany = async (data: JoinCompanyPayload) => {
  const response = await axiosInstance.post('company/join-company', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response;
};
