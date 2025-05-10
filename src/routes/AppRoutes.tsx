import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/auth/Login';
import Unauthorized from '../pages/auth/Unauthorized';
import AdminDashboard from '../pages/admin/Dashboard';
import EmployeeDashboard from '../pages/employee/Dashboard';
import Register from '../pages/auth/Register';
import ForgetPassword from '../pages/auth/ForgetPassword';
import VerifyResetCode from '../pages/auth/VerifyResetCode';
import PasswordResetSuccess from '../pages/auth/PasswordResetSuccess';
import ResetPassword from '../pages/auth/ResetPassword';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/reset-password/verify" element={<VerifyResetCode />} />
      <Route
        path="/reset-password/success"
        element={<PasswordResetSuccess />}
      />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/employee"
        element={
          <PrivateRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
