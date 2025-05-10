import React from 'react';
import LogoContainer from '../../assets/svg/LogoContainer.svg?react';

type IntroMessageProps = {
  heading: string;
  description: string;
};

const IntroMessage: React.FC<IntroMessageProps> = ({
  heading,
  description,
}) => {
  return (
    <div className="text-center">
      <LogoContainer className="m-auto" />
      <div className="mt-5">
        <h2 className="heading4Medium">{heading}</h2>
        <p className="bodyMediumRegular text-[#8A8C91] pt-1">{description}</p>
      </div>
    </div>
  );
};

export default IntroMessage;
