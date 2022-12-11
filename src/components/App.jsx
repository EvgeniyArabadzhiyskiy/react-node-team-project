import { useRef, useEffect, useCallback, lazy, Suspense } from 'react';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/authOperation';
// import { getNextPage, testOperation } from 'redux/transactions/transactionsSlice';
// import { getAllTransactions } from 'redux/transactions/transactionOperations';

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
import { useGetAllTransactionsQuery } from 'redux/WalletApiServise/wallet-api';
import { useState } from 'react';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));



// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGEyYTA1OGQ4MmIyMjMxNWY2OWNlZSIsImlhdCI6MTY3MDE3ODg0NiwiZXhwIjoxNjcxMzg4NDQ2fQ.YeyuFPN6T0sjdm7X5onQhuYGfZhT73OoNHyBxkJGvtE'
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const App = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);
  const { isError, isRefreshingUser } = useSelector(state => state.auth);
  const { isModalAddOpen } = useSelector(state => state.transactions);
  
 
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [page, setPage] = useState(1)
  const [allTrans, setAllTrans] = useState([])
  const [hasPage, setHasPage] = useState(false)

  

  const observer = useRef(null);

  const lastElement = useCallback(item => {

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasPage ) {
        observer.current.unobserve(entries[0].target);
        // dispatch(getNextPage());
        setPage(prev => prev + 1)

      }
      }, { rootMargin: '5px',threshold: 1});

      if (item)  observer.current.observe(item);
      
    },
    [hasPage]
  );

  // useEffect(() => {
  //   if (isLoggedIn) dispatch(getAllTransactions(pageNum));
  // }, [dispatch, isLoggedIn, pageNum]);

  

  
  const { data  } = useGetAllTransactionsQuery(page, 
  //   {
  //   selectFromResult: (response) => {
  //     return  {
  //       transactions: response.data?.transactions
  //       // transactions: {
  //       //   allTransactions: response.data?.transactions,
  //       //   balance: response.data?.userBalance,
  //       //   user: 'Djon',
  //       //   age: 30,
  //       // }
  //     }
  //   }
  // }
  )

  // const transactions = useMemo(() => {
  //   return  data?.transactions 
  // },[data?.transactions])
  const transactions = data?.transactions 


  // const balance = useMemo(() => {
  //   return  data?.userBalance || 0
  // },[data?.userBalance])

  const balance = data?.userBalance 
  
  useEffect(() => {
    setHasPage(Boolean(transactions?.length))

    if (transactions?.length > 0) {
      setAllTrans(prev => [...prev, ...transactions])
    }
  }, [transactions]);
    

  // if (transactions.length < 0) return null;
  if (!transactions) return null;


  if (isError)  toast.error(isError)
  
  return isRefreshingUser ? (
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

          <Route path="/" element={<DashboardPage totalBalance={balance} />}>
            <Route index element={<Navigate to="/login" />} />
            <Route
              path="home"
              element={
                <PrivateRoute>
                 
                  <HomeTab 
                  data={allTrans} 
                  totalBalance={balance}
                  // data={transactions} 
                  ref={lastElement} />
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {isModalAddOpen && (
        <ModalAddTransaction>
          <FormTransaction setAllTrans={setAllTrans} setPage={setPage} />
        </ModalAddTransaction>
      )}
      <ToastContainer autoClose={2500} theme="colored" />
    </ThemeProvider>
  );
};



// const [addNewTransaction_RTK] =  useAddTransactMutation()

// const handleAddPost = async () => {
//   const trans = {
//     comment: 'Mutation',
//     amount: 200,
//     category: 'Children',
//     typeOperation: "expense",
//     date: new Date().toString(),
//   }

//   await addNewTransaction_RTK(trans).un
  
// };


// const handleAddPost =  () => {
//   setPage(prev => prev + 1)
// };

// <button type='button' onClick={handleAddPost}>Add Post</button> 

// <ul>{data.map(item => { return <li key={item._id}>{item.category}</li>})}</ul> 
