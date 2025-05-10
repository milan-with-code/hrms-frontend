import React from 'react';
import { Button } from '../../components/ui/button';
import IntroMessage from '../../components/common/IntroMessage';
import { useForm } from 'react-hook-form';
import {
  resetPasswordSchema,
  type ResetPasswordFormSchema,
} from '../../validation/authSchema';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const ResetPassword: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const onSubmit = (data: ResetPasswordFormSchema) => {
    console.log('data :>> ', data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Create new password"
          description="Create a new password to secure your account. Make sure the password is strong and easy to remember."
        />
        <form className="pt-11" onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4">
            <Label className="pb-1.5 bodyMediumMedium">New Password</Label>
            <Input
              placeholder="Enter your new password"
              {...register('newPassword')}
            />
            {errors.newPassword?.message && (
              <p className="text-[#FF4345] bodyMediumRegular text-sm mt-1.5">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div>
            <Label className="pb-1.5 bodyMediumMedium">Confirm password</Label>
            <Input
              placeholder="Confirm your password"
              {...register('confirmPassword')}
            />
            {errors.newPassword?.message && (
              <p className="text-[#FF4345] bodyMediumRegular text-sm mt-1.5">
                {errors.newPassword.message}
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

export default ResetPassword;
