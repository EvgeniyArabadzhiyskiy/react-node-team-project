import { StyledWrap } from './HomeTab.styled';
import { HomeTabMobItem } from './HomeTabItem';

const HomTabMobile = ({ transactions, balances, lastElement }) => {
  return (
    <StyledWrap>
      {transactions.map((transaction, idx) => {
        const itemBalance = balances[idx];

        if (transactions.length === idx + 1) {
          return (
            <HomeTabMobItem
              ref={lastElement}
              key={transaction._id}
              transaction={{ ...transaction, ...itemBalance }}
            />
          );
        }

        return (
          <HomeTabMobItem
            key={transaction._id}
            transaction={{ ...transaction, ...itemBalance }}
          />
        );
      })}
    </StyledWrap>
  );
};

export default HomTabMobile;
