import { lazy, Suspense } from "react";
import { useMedia } from "react-use";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import HomeTab from "./HomeTab";
import Currency from "./Currency";
import DiagramTab from "./DiagramTab";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import { getPath } from "helpers/getPath";
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const Router = () => {
  const { pathname } = useLocation()
  const isMobile = useMedia('(max-width: 767px)');

  return  (
    <Suspense fallback={null}>
        <Routes>
            <Route
            path={getPath(pathname)}
            element={
                <PublicRoute restricted navigateTo="/home">
                <LoginPage />
                </PublicRoute>}
            />

            {/* <Route  path="/tester" element={<Tester />} /> */}

            <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeTab />}/>
            <Route path="statistic" element={<DiagramTab />} />
            {isMobile &&  <Route path="currency" element={<Currency /> }/>} 
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Suspense>)
}
 
export default Router;