import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { addInfo } from 'redux/transactions/transactionsSlice';
import { useGetAllTransactionsQuery } from 'redux/WalletApiServise/wallet-api';

const Tester = () => {
  // const isMobie = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  const [ddd, setDDD] = useState(false);
  // console.log('Tester  ddd', ddd); 
  
  const dispatch = useDispatch();
  const { info } = useSelector(state => state.transactions);
  // console.log('Tester  info', info);
  
  const { data = {} } = useGetAllTransactionsQuery(1);
  console.log("Tester  data", data);
  
  useEffect(() => {
    // console.log('UseEffect');
    // console.log("useEffect  data.transactions", data.transactions);
    // console.log('Tester  ddd', ddd);
    
    if (!data.transactions) return;
    dispatch(addInfo(data));
    
    return () => {
      console.log('Component Unmount');
    }
    });
    
    
  const onBtn = () => {
    setDDD(p => !p);
  };

  // console.log('re-render');
  return (
    <div>

      {ddd && (
        <div>
          <h1>Mobie</h1>
          <ul>
            {info.map(({ _id }) => {
              return <li key={_id}>Mobile</li>;
            })}
          </ul>
        </div>
      )}
     

      {isTablet && (
        <div>
          <h1>Tablet</h1>
          <ul>
            {info.map(({ _id }) => {
              return <li key={_id}>Tablet</li>;
            })}
          </ul>
        </div>
      )}

      {isDesktop && (
        <div>
          <h1>Desktop</h1>
          <ul>
            {info.map(({ _id }) => {
              return <li key={_id}>Desktop</li>;
            })}
          </ul>
        </div>
      )}

      <button type="button" onClick={onBtn}>
        Click
      </button>
    </div>
  );
};

export default Tester;
