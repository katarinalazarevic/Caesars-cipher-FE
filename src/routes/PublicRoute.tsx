import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from 'src/constants/route-constants';
import { Roles } from 'src/enums/Roles';
import { useAuthStore } from 'src/store/user/useAuthStore';

export const PublicRoute = () => {
    const { token, role} = useAuthStore((state) => ({
        token: state.token,
        role:state.role
    }));

    // TODO: Edit default route for user when logged in
    const ROUTE= role==Roles.SUPERADMIN ? ROUTES.ADMIN_LANDING_PAGE : ROUTES.LOGIN_ROUTE 

    if (token) {
      return <Navigate to={ROUTE} replace/>;
    }
    return <Outlet />;
}
