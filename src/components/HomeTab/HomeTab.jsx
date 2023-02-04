import { useMedia } from 'react-use';

import { useBalanceList } from 'hooks';
import { useInfiniteScroll } from 'hooks';
import { useGetTransaction } from 'hooks';

import HomTabMobile from './HomTabMobile';
import HomeTabDesctop from './HomeTabDesctop';
import ButtonAddTransactions from 'components/Buttons/ButtonAddTransactions';
import { breakpoints } from 'styles/breakpoints';

const HomeTab = () => {
  const isMobile = useMedia(breakpoints.small);
  const isDesctop = useMedia(breakpoints.medium);

  const visibleTransactions = useGetTransaction();
  const lastElement = useInfiniteScroll();

  const balances = useBalanceList(visibleTransactions);

  return (
    <div>
      {isMobile && (
        <HomTabMobile
          balances={balances}
          lastElement={lastElement}
          transactions={visibleTransactions}  
        />
      )}
      {isDesctop && (
          <HomeTabDesctop
            balances={balances}
            lastElement={lastElement}
            transactions={visibleTransactions}
          />      
      )}
      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTab;
