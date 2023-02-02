import HomeTabItem from '../HomeTabItem';
import { StyledWrap } from './HomTabMobile.styled';

const HomTabMobile = ({ transactions, balances, lastElement }) => {
  return (
    <StyledWrap>
      {transactions.map((transaction, idx) => {
        const itemBalance = balances[idx];
        const lastIndex = transactions.length === idx + 1

        return (
          <HomeTabItem
            key={transaction._id}
            lastElement={lastIndex ? lastElement : null}
            transaction={{ ...transaction, itemBalance }}
          />
        );
      })}
    </StyledWrap>
  );
};

export default HomTabMobile;
