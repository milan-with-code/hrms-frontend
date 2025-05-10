import React, { useEffect, useState } from 'react';
import IntroMessage from '../../components/common/IntroMessage';
import { useForm } from 'react-hook-form';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const CreateCompany: React.FC = () => {
  const [companyCode, setCompanyCode] = useState<string>('');
  const { handleSubmit } = useForm();
  const onSubmit = () => {};

  const generateCompanyCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  useEffect(() => {
    const code = generateCompanyCode();
    setCompanyCode(code);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full mx-auto sm:border sm:border-[#E8E8E9] sm:rounded-xl p-6">
        <IntroMessage
          heading="Create Company"
          description="Ready to build your company's profile? Let's set up your organization so your team can get started smoothly!"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="pt-11">
          <div>
            <Label className="pb-1.5 bodyMediumMedium">Company Name</Label>
            <Input placeholder="Enter your company name" />
          </div>
          <div className="py-4">
            <Label className="pb-1.5 bodyMediumMedium">Email</Label>
            <Input placeholder="Enter your company email " />
          </div>
          <div>
            <Label className="pb-1.5 bodyMediumMedium">Location</Label>
            <Input placeholder="Enter your company location " />
          </div>
          <div className="py-4">
            <Label className="pb-1.5 bodyMediumMedium">Company Size</Label>
            <Input placeholder="Enter your company size" type="number" />
          </div>
          <p className="bodyMediumMedium">Company Code: {companyCode}</p>
          <Button className="w-full mt-6">Continue</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
