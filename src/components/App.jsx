import { useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from './Router';
import Spinner from './Spinner';
import FlipCard from './FlipCard';
import ModalLogout from './ModalLogout';
import ModalWindow from './ModalWindow';

import { GlobalStyle } from './GlobalStyle';
import { nightTheme, dayTheme } from '../theme';
import { setToken } from 'redux/auth/authSlice';
import { AnimatePresence } from 'framer-motion';
import { useUserRefreshQuery } from 'redux/WalletApiServise/wallet-api';

// user1000@mail.com

export const App = () => {
  const dispatch = useDispatch();
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
        <Router />
    
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



