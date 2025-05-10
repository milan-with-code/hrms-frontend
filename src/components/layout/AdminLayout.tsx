import React, { type ReactNode } from 'react';

type AdminLayoutProps = {
  children: ReactNode;
};

const ComponentName: React.FC<AdminLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ComponentName;
