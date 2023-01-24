import { useGetTransaction } from 'hooks';
// import { useRef } from 'react';
import { useState } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, /* useSelector*/ } from 'react-redux';
// import { useMedia } from 'react-use';
// import { addInfo } from 'redux/transactions/transactionsSlice';
import { useDeleteTransactionMutation,
  //  useGetAllTransactionsQuery 
  } from 'redux/walletsApiServise/wallet-api';

const Tester = () => {
  // const dispatch = useDispatch()
  // const isMobie = useMedia('(max-width: 767px)');
  // const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  // const isDesktop = useMedia('(min-width: 1280px)');

  // let header = useRef('4292');
  // console.log("Tester  header", header.current);

  const [ddd, setDDD] = useState(1);
  // console.log('Tester  ddd', ddd);

  // const [hey, setHey] = useState('Cool');
  // console.log('Tester  hey', hey);


  // const dispatch = useDispatch();
  // const { info } = useSelector(state => state.transactions);
  // console.log('Tester  info', info);

  // const { data = {} } = useGetAllTransactionsQuery();
  // console.log("Tester  data", data);

  const transactions = useGetTransaction(ddd);
  console.log("Tester  transactions", transactions);

  const [deleteTrans] =  useDeleteTransactionMutation()

  const handleClick = (id) => {
    console.log("handleClick  id", );
    deleteTrans('63cd2a8ca301d1b91d874912')
    // dispatch(resetTransactions());
  }

  // useEffect(() => {
  //   // console.log("Tester  header", header.current);
  //   // console.log('UseEffect Data');
  //   // console.log("useEffect  data.transactions", data.transactions);
  //   // console.log('Tester  ddd', ddd);

  //   // if (!data.transactions) return;
  //   // dispatch(addInfo(data));

  //   return () => {
  //     // console.log('Component Unmount Data');
  //   }
  // });

  
  

  // header.current += 'Djon'  
  // useEffect(() => {

    // console.log('UseEffect ');
    // header.current = 555
    // console.log('Tester  header', header.current);


    // const onResize = e => {
    //   if (header.current) {
    //     const high = header.current.clientHeight;
    //     // console.log('useEffect  high', high);
    //     setHey(high)
    //   }
    // };
    // console.log('useEffect onResize');
    // console.log('Tester  header', header.current);
    // onResize();

    // window.addEventListener('resize', onResize);

    // return () => {
    //   console.log('Clear onResize');
    // };
  // });

  // const onBtn = () => {
  //   console.log('Tester  header', header.current);
  //   // setHey(p => p + ' Poly');
  //   // setDDD(p => !p);
  //   // console.log('re-render');
  //   // console.log('Djon');
  //   header.current += 'Djon'

  // };

  const onRender = () => {
    setDDD(p => p + 1);
    // console.log('Prosto LOG');
  };

  // console.log('re-render');
  return (
    <div>
         {true && (

        <div
          style={{
            height: '200px',
            // width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p 
          // ref={header} 
          style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            pariatur autem nobis officiis facere voluptatum quo id totam dolore
            aliquid asperiores, molestiae, quis perferendis ex consectetur
            assumenda. Dolore suscipit quos modi? Cumque reprehenderit ad earum
            quia magni pariatur. Exercitationem in quidem officiis at, et
            excepturi atque tempore voluptate. Illum, beatae.
          </p>
         
        </div>
      )}

      {/* {ddd && (
        <div>
          <h1>Mobie</h1>
          <ul>
            {info.map(({ _id }) => {
              return <li key={_id}>Mobile</li>;
            })}
          </ul>
        </div>
      )} */}

      {/* {isTablet && (
        <div>
          <h1>Tablet</h1>
          <ul>
            {info.map(({ _id }) => {
              return <li key={_id}>Tablet</li>;
            })}
          </ul>
        </div>
      )} */}

      {/* info.length > 0 */}
   

      <button type="button" onClick={handleClick}>
        Click
      </button>

      <button type="button" onClick={onRender}>
        Render
      </button>
    </div>
  );
};

export default Tester;
