import React from 'react';
import IntroMessage from '../../components/common/IntroMessage';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { useForm } from 'react-hook-form';
import {
  forgotPasswordSchema,
  type ForgotPasswordFormSchema,
} from '../../validation/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const ForgetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit = (data: ForgotPasswordFormSchema) => {
    console.log('data :>> ', data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Forget password"
          description="Reset your account password and access your personal again."
        />
        <form className="pt-11" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label className="pb-1.5 bodyMediumMedium">Email</Label>
            <Input
              placeholder="Enter your email"
              type="email"
              {...register('email')}
            />
            {errors.email?.message && (
              <p className="text-[#FF4345] bodyMediumRegular mt-1.5">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="pt-6">
            <Button className="w-full">Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
