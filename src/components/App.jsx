import { useRef, useEffect, useCallback, lazy, Suspense } from 'react';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/authOperation';
import { getNextPage } from 'redux/transactions/transactionsSlice';
import { getAllTransactions } from 'redux/transactions/transactionOperations';

import HomeTab from './HomeTab';
import Currency from './Currency';
import DiagramTab from './DiagramTab';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ModalAddTransaction from './ModalAddTransaction';
import ButtonAddTransactions from './ButtonAddTransactions';
import FormTransaction from './FormTransaction/FormTransaction';
import { nightTheme, dayTheme } from '../theme';
import Spinner from './Spinner';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);
  const { isLoggedIn, isError, isRefreshingUser } = useSelector(state => state.auth);
  const { transactions, isModalAddOpen, hasNextPage, pageNum } = useSelector(state => state.transactions);

  const observer = useRef(null);

  const lastElement = useCallback(item => {

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        observer.current.unobserve(entries[0].target);
        dispatch(getNextPage());
      }
      }, { rootMargin: '5px',threshold: 1});

      if (item)  observer.current.observe(item);
      
    },
    [dispatch, hasNextPage]
  );

  useEffect(() => {
    if (isLoggedIn) dispatch(getAllTransactions(pageNum));
  }, [dispatch, isLoggedIn, pageNum]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (transactions.length < 0) return null;
  

  if (isError)  toast.error(isError)
  

  return isRefreshingUser ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={isDarkTheme ? dayTheme : nightTheme}>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

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

          <Route path="/" element={<DashboardPage />}>
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
            ></Route>
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {isModalAddOpen && (
        <ModalAddTransaction>
          <FormTransaction />
        </ModalAddTransaction>
      )}
      <ToastContainer autoClose={2500} theme="colored" />
    </ThemeProvider>
  );
};
