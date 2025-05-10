import React from 'react';
import { Button } from '../../components/ui/button';
import SuccessPassword from '../../assets/svg/SuccessPassword.svg?react';
import LogoContainer from '../../assets/svg/LogoContainer.svg?react';

const PasswordResetSuccess: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <LogoContainer className="m-auto" />
        <SuccessPassword className="m-auto my-5" />
        <div className="mt-5 text-center">
          <h2 className="heading4Medium">Success create new password</h2>
          <p className="bodyMediumRegular text-[#8A8C91] pt-1">
            Your new password has been successfully created! Keep it strong and
            memorable to ensure your account's security.
          </p>
        </div>
        <Button className="w-full mt-6">Back to Login</Button>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
