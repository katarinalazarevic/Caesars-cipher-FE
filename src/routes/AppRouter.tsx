import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'src/constants/route-constants';
import { PublicRoute } from './PublicRoute';
import { MainPage } from 'src/pages/main-page/main-page';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;