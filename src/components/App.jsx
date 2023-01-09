import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomeTab from './HomeTab';
import Spinner from './Spinner';
import Currency from './Currency';
import DiagramTab from './DiagramTab';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import FlipCard from './FlipCard/FlipCard';
import ModalLogout from './ModalLogout';
import ModalWindow from './ModalWindow/ModalWindow';
import { nightTheme, dayTheme } from '../theme';
import { setToken } from 'redux/auth/authSlice';
import { useUserRefreshQuery } from 'redux/WalletApiServise/wallet-api';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from './GlobalStyle';
import { getPath } from 'helpers/getPath';


const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// user1000@mail.com

export const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
  const isMobile = useMedia('(max-width: 767px)');
  const [searchParams] = useSearchParams();

  const { token } = useSelector(state => state.auth);
  const { isNightTheme } = useSelector(store => store.theme);
  const {  isModalOpen, modalExit, modalTransaction } = useSelector(state => state.modal);

  const { isError, isLoading } = useUserRefreshQuery(undefined, { skip: !token })
  
  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (!accessToken) return
    
    dispatch(setToken(accessToken))
  },[dispatch, searchParams])

  if (isError)  toast.error("Error")
  
  return isLoading 
    ? <Spinner /> 
    : <ThemeProvider theme={isNightTheme ? dayTheme : nightTheme}>
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
        </Suspense>

        <AnimatePresence>
          {isModalOpen && (
            <ModalWindow>
              {modalTransaction && <FlipCard />}
              {modalExit && <ModalLogout />}
            </ModalWindow>)}
        </AnimatePresence>
        
        <GlobalStyle />
        <ToastContainer autoClose={2500} theme="colored" />
      </ThemeProvider>
};



