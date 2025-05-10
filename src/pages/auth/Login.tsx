import React from 'react';
import IntroMessage from '../../components/common/IntroMessage';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import type { LoginInputFieldProps } from '../../types/auth';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginFormSchema } from '../../validation/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../../query-hooks/useUser';
import { showError } from '../../lib/toastService';
import { AxiosError } from 'axios';

interface IFormInput {
  email: string;
  password: string;
}

const InputField: React.FC<LoginInputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  registration,
  error,
}) => (
  <div className="pb-4">
    <Label className="pb-1.5 bodyMediumMedium">{label}</Label>
    <Input type={type} placeholder={placeholder} {...registration} />
    {error && (
      <p className="text-[#FF4345] bodyMediumRegular mt-1.5">{error}</p>
    )}
  </div>
);

const CheckboxField: React.FC<{
  id: string;
  label: string;
}> = ({ id, label }) => (
  <div className="flex items-center space-x-2">
    <Checkbox id={id} className="bodyMediumMedium" />
    <label
      htmlFor={id}
      className="bodyMediumMedium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
);

const Login: React.FC = () => {
  const { mutateAsync: loginUser } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormSchema) => {
    const { email, password } = data;
    try {
      const data = await loginUser({ email, password });
      console.log('data :>> ', data);
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
          heading="Continue with your account"
          description="Simplify HR tasks with our dashboard! Manage employees, track attendance, and automate payroll effortlessly."
        />
        <form onSubmit={handleSubmit(onSubmit)} className="pt-11">
          <InputField
            label="Email"
            placeholder="Enter your email"
            registration={register('email')}
            error={errors.email?.message}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            registration={register('password')}
            error={errors.password?.message}
          />

          <div className="flex justify-between items-center">
            <CheckboxField id="terms" label="Accept terms and conditions" />
            <Link
              to="/forgot-password"
              className="text-[#FF7A2E] bodyMediumRegular"
            >
              Forget password?
            </Link>
          </div>

          <div className="pt-6">
            <Button className="w-full">Sign In</Button>
            <p className="bodyMediumRegular text-[#8A8C91] pt-3 text-center">
              Have an account?{' '}
              <Link to="/register" className="text-[#FF7A2E] bodyMediumMedium">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
