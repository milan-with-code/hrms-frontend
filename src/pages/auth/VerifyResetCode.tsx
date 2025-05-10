import React from 'react';
import IntroMessage from '../../components/common/IntroMessage';
import { Button } from '../../components/ui/button';
import { Controller, useForm } from 'react-hook-form';
import {
  verificationCodeSchema,
  type VerificationCodeFormSchema,
} from '../../validation/authSchema';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '../../components/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';

const VerifyResetCode: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerificationCodeFormSchema>({
    resolver: zodResolver(verificationCodeSchema),
  });
  const onSubmit = (data: VerificationCodeFormSchema) => {
    console.log('data :>> ', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Verification code"
          description="We have sent the OTP code to pratikhgy@gmail.com for verification process."
        />
        <form className="pt-11" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <div>
                <InputOTP
                  maxLength={6}
                  {...field}
                  onChange={field.onChange}
                  value={field.value}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {errors.code && (
                  <p className="text-[#FF4345] bodyMediumRegular text-sm mt-1.5 text-center">
                    {errors.code.message}
                  </p>
                )}
              </div>
            )}
          />
          <div className="pt-6">
            <Button className="w-full">Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyResetCode;
