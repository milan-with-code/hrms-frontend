import React from 'react';
import IntroMessage from '../../components/common/IntroMessage';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { useForm } from 'react-hook-form';
import {
  joinCompanySchema,
  type JoinCompanyFormSchema,
} from '../../validation/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useJoinCompany } from '../../query-hooks/useUser';
import { AxiosError } from 'axios';
import { showError } from '../../lib/toastService';

const CompanyJoin: React.FC = () => {
  const { mutateAsync: joinCompany } = useJoinCompany();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<JoinCompanyFormSchema>({
    resolver: zodResolver(joinCompanySchema),
  });

  const onSubmit = async (data: JoinCompanyFormSchema) => {
    const { companyCode, companyName } = data;
    try {
      const data = await joinCompany({ companyName, companyCode });
      console.log('data :>> ', data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        showError(error.response?.data.message ?? 'Access denied');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Join Company (for Employees)"
          description="Welcome! Please enter your company code or details to join your organization. We're excited to have you onboard!"
        />
        <form className="pt-11" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label className="pb-1.5 bodyMediumMedium">Company Name</Label>
            <Input
              placeholder="Enter your company name"
              type="text"
              {...register('companyName')}
            />
            {errors.companyName?.message && (
              <p className="text-[#FF4345] bodyMediumRegular mt-1.5">
                {errors.companyName?.message}
              </p>
            )}
          </div>
          <div className="pt-4">
            <Label className="pb-1.5 bodyMediumMedium">Company Code</Label>
            <Input
              placeholder="Enter your company code"
              type="text"
              {...register('companyCode')}
            />
            {errors.companyCode?.message && (
              <p className="text-[#FF4345] bodyMediumRegular mt-1.5">
                {errors.companyCode?.message}
              </p>
            )}
          </div>
          <Button className="w-full mt-6">Continue</Button>
        </form>
      </div>
    </div>
  );
};

export default CompanyJoin;
