import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from 'src/pages/login-page/login-page';
import { AdminLandingPage } from 'src/pages/admin-landing-page/admin-landing-page';
import { ROUTES } from 'src/constants/route-constants';
import { PasswordResetContent } from 'src/contents/reset-password-page/reset-password';
import { ResetPasswordForm } from 'src/contents/reset-password-email-form/reset-password-email';
import ProtectedRoute from './ProtectedRoute';
import { Roles } from 'src/enums/Roles';
import { PublicRoute } from './PublicRoute';
import { CompanyInformationPage } from 'src/pages/company-information-page/company-information-page';
import ToastMessage from 'src/components/toast-message/toast-message';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[Roles.SUPERADMIN]} />}>
          <Route
            path={ROUTES.ADMIN_LANDING_PAGE}
            element={<AdminLandingPage />}
          />
          <Route path={ROUTES.COMPANY_INFORMATION} element={<CompanyInformationPage />} />
        </Route>
        <Route path="/reset-password" element={<PasswordResetContent />} />
        <Route path="/email-password-reset" element={<ResetPasswordForm />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;