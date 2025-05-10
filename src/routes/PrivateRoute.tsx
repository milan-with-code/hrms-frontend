import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

interface PrivateRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user!.role))
    return <Navigate to="/unauthorized" replace />;

  return <>{children}</>;
};

export default PrivateRoute;
