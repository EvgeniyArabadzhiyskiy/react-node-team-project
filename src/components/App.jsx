import {  useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routing from './Routing ';
import Spinner from './Spinner';
import FlipCard from './FlipCard';
import ModalLogout from './ModalLogout';
import ModalWindow from './ModalWindow';

import { useGoogleAuth } from 'hooks';
import { GlobalStyle } from './GlobalStyle';
import { nightTheme, dayTheme } from '../theme';
import { AnimatePresence } from 'framer-motion';
import { useGetBalanceQuery, useUserRefreshQuery } from 'redux/walletsApiServise/wallet-api';

// user100@mail.com

export const App = () => {
  const { token } = useSelector(state => state.auth);
  const { isNightTheme } = useSelector(store => store.theme);
  const {  isModalOpen, modalExit, modalTransaction } = useSelector(state => state.modal);

  const { isError, isLoading } = useUserRefreshQuery(undefined, { skip: !token })

  useGetBalanceQuery(undefined, { skip: !token })

  useGoogleAuth()

  if (isError)  toast.error("Error")
  
  return isLoading 
    ? <Spinner /> 
    : <ThemeProvider theme={isNightTheme ? dayTheme : nightTheme}>
      
        <Routing  />
    
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



