import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
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
import { getNextPage, getTransactions } from 'redux/transactions/transactionsSlice';
import { useGetAllTransactionsQuery, useUserRefreshQuery } from 'redux/WalletApiServise/wallet-api';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from './GlobalStyle';
// import ButtonAddTransactions from './ButtonAddTransactions';
// import Tester from './Tester/Tester';



const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// user100@mail.com
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTA2OTA0NTAxMTUzMGZlNDQwMzNiYyIsImlhdCI6MTY3MTQ1NzAyOSwiZXhwIjoxNjcyNjY2NjI5fQ.VVIFI6wsU2edbnVOgRIXVc64J3M79dVUghQAg_2VT1A'
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const App = () => {
  const dispatch = useDispatch();
  const isMobie = useMedia('(max-width: 767px)');
  const [searchParams] = useSearchParams();

  const isDarkTheme = useSelector(store => store.theme.isNightTheme);
  const { token } = useSelector(state => state.auth);
  const { transactions, pageNum } = useSelector(state => state.transactions);
  const {  isModalOpen, modalExit, modalTransaction } = useSelector(state => state.modal);

  const { isError, isLoading } = useUserRefreshQuery(undefined, { skip: !token })
  const { data = {} } = useGetAllTransactionsQuery(pageNum, { skip: !token })
  
  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (!accessToken) return
    
    dispatch(setToken(accessToken))
  },[dispatch, searchParams])

  // useEffect(() => {
  //   if(!data.transactions) return
  //   // console.log("useEffect  data.transactions", data.transactions);

  //   setTransactions(prev => [...prev, ...data.transactions]);
  // }, [data]);
 
  useEffect(() => {
    if(!data.transactions) return

    dispatch(getTransactions(data));
  }, [data, dispatch]);

  const observer = useRef(null);

  const lastElement = useCallback(item => {

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting ) {
        // console.log('ОЧИСТИЛИ НАБЛЮДЕНИЕ :', entries[0].target,);

        observer.current.unobserve(entries[0].target);
        dispatch(getNextPage());
      }
      }, { rootMargin: '5px',threshold: 0.95});

      if (item)  {
        // console.log('НАБЛЮДЕНИЕ ВЕДЕТСЯ ЗА :', item);
        observer.current.observe(item);
      }
    },[dispatch]
  );

  if (isError)  toast.error("Error")
  
  return isLoading ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={isDarkTheme ? dayTheme : nightTheme}>
      <Suspense fallback={null}>
        <Routes>
          
          <Route
            path="/login"
            element={
              <PublicRoute restricted navigateTo="/home">
                <LoginPage />
              </PublicRoute>}
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted navigateTo="/home">
                <LoginPage />
              </PublicRoute>}
          />

          <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeTab data={transactions} ref={lastElement} />}/>
            <Route path="statistic" element={<DiagramTab />} />
            {isMobie &&  <Route path="currency" element={<Currency /> }/>} 
          </Route>

          {/* <Route  path="/tester" element={<Tester />} /> */}
          {/* <Route index element={<Navigate to="/login" />} /> */}

          {/* <Route path="/" element={<DashboardPage />}>
            <Route index element={<Navigate to="/login" />} />
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <HomeTab data={transactions} ref={lastElement} />
                  <ButtonAddTransactions />
                </PrivateRoute>}
            />
            <Route
              path="statistic"
              element={
                <PrivateRoute>
                  <DiagramTab />
                </PrivateRoute>}
            />

            <Route
              path="currency"
              element={
                <PrivateRoute>
                  {isMobie
                    ? <Currency />
                    : <div>
                      <HomeTab />
                      <ButtonAddTransactions />
                    </div>
                  }
                </PrivateRoute>}
            />
          </Route> */}

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
  );
};



