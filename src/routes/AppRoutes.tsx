import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/auth/Login';
import Unauthorized from '../pages/auth/Unauthorized';
import AdminDashboard from '../pages/admin/Dashboard';
import EmployeeDashboard from '../pages/employee/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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
