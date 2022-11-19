import Diagram from 'components/Diagram/Diagram';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import Home from 'components/Home/Home';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from 'components/PublicRoutes/PublicRoutes';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route
        path="/login"
        element={
          <PublicRoute restricted navigateTo="/home">
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute restricted navigateTo="/home">
            <RegisterPage />
          </PublicRoute>
        }
      />

      <Route path="/" element={<DashboardPage />}>
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="diagram"
          element={
            <PrivateRoute>
              <Diagram />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
