import React from 'react';
import IntroMessage from '../../components/common/IntroMessage';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import type { RegisterInputFieldProps } from '../../types/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  type RegisterFormSchema,
} from '../../validation/authSchema';
import { useRegister } from '../../query-hooks/useUser';
import { AxiosError } from 'axios';
import { showError, showSuccess } from '../../lib/toastService';

const InputField: React.FC<RegisterInputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  registration,
  error,
  ...rest
}) => (
  <div className="pb-4">
    <Label className="pb-1.5 bodyMediumMedium">{label}</Label>
    <Input type={type} placeholder={placeholder} {...registration} {...rest} />
    {error && (
      <p className="text-[#FF4345] bodyMediumRegular mt-1.5">{error}</p>
    )}
  </div>
);

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync: registration } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data: RegisterFormSchema) => {
    const { email, fullName, password, phone } = data;
    try {
      const data = await registration({
        email,
        name: fullName,
        password,
        phone,
      });
      if (data.status === 201) {
        showSuccess(data.data.message);
        await localStorage.setItem('token', data.data.token);
        navigate('/choose-role');
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        showError(
          error.response?.data?.message ?? 'Login failed. Please try again.'
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Create your account"
          description="Streamline HR tasks with a single dashboard! Manage employees, track attendance, and automate payroll."
        />
        <form onSubmit={handleSubmit(onSubmit)} className="pt-11">
          <InputField
            label="Full name"
            placeholder="Enter your full name"
            type="text"
            registration={register('fullName')}
            error={errors.fullName?.message}
          />
          <InputField
            label="Work email"
            placeholder="Enter your email address"
            type="email"
            registration={register('email')}
            error={errors.email?.message}
          />
          <InputField
            label="Create password"
            placeholder="Create your password"
            type="password"
            registration={register('password')}
            error={errors.password?.message}
          />
          <InputField
            label="Number phone"
            placeholder="Enter your number phone"
            type="tel"
            registration={register('phone')}
            error={errors.phone?.message}
          />
          <div className="pt-2">
            <Button className="w-full">Next</Button>
            <p className="bodyMediumRegular text-[#8A8C91] pt-3 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-[#FF7A2E] bodyMediumMedium">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
