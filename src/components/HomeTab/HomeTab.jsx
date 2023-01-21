import { useMedia } from 'react-use';

import { useBalanceList } from 'hooks/useBalanceList';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { useGetTransaction } from 'hooks/useGetTransaction';

import HomTabMobile from './HomTabMobile';
import HomeTabDesctop from './HomeTabDesctop';
import ButtonAddTransactions from 'components/Buttons/ButtonAddTransactions';

const HomeTab = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isDesctop = useMedia('(min-width: 768px)');

  const transactions = useGetTransaction();
  const balances = useBalanceList(transactions);
  const lastElement = useInfiniteScroll();

  return (
    <div>
      {isMobile && (
        <HomTabMobile
          balances={balances}
          lastElement={lastElement}
          transactions={transactions}
        />
      )}
      {isDesctop && (
        <HomeTabDesctop
          balances={balances}
          lastElement={lastElement}
          transactions={transactions}
        />
      )}

      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTab;
