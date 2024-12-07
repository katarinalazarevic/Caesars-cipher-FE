import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from 'src/store/user/useAuthStore';

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { token, roles} = useAuthStore((state) => ({
    token: state.token,
    roles: state.role,
  }));

  if (!token) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(roles!)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};
export default ProtectedRoute