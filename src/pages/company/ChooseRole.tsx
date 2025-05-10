import React from 'react';
import { Button } from '../../components/ui/button';
import IntroMessage from '../../components/common/IntroMessage';
import { accountList } from '../../constants/data';
import { useNavigate } from 'react-router-dom';
import { useChooseRole } from '../../query-hooks/useUser';
import { showError, showSuccess } from '../../lib/toastService';
import { AxiosError } from 'axios';

const ChooseRole: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync: role } = useChooseRole();
  const onSubmit = async (data: string) => {
    const chooseRole = data === 'As employee' ? 'Employee' : 'Manager';
    try {
      const data = await role(chooseRole);
      if (data.status === 200) {
        showSuccess(data.data.message ?? 'Role updated successfully');
        navigate('/company-join');
      }
    } catch (error: unknown) {
      console.log('error :>> ', error);
      if (error instanceof AxiosError) {
        showError(
          error.response?.data.message ?? error.message ?? 'Network Error'
        );
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Select account list as what"
          description="Options to specify the type or category of account to be used or displayed."
        />
        <div className="pt-8">
          {accountList.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                className="border border-[#E8E8E9] rounded-xl p-3 mt-3"
                key={`${role.heading}-${index}`}
                onClick={() => onSubmit(role.heading)}
              >
                <Icon />
                <div className="pt-3">
                  <h2 className="bodyMediumMedium">{role.heading}</h2>
                  <p className="text-[#8A8C91] bodyMediumRegular pt-1">
                    {role.description}
                  </p>
                </div>
              </div>
            );
          })}
          <Button
            className="w-full mt-6"
            onClick={() => navigate('/create-company')}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
