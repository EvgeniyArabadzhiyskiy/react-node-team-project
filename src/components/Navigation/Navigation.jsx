import {
  Link,
  List,
  ListMob,
  LinkMob,
  HomeSvg,
  StatisticSvg,
  CurrencySvg,
  LinkText,
  ItemLink,
} from './Navigation.styled';
import { useMedia } from 'react-use';

const Navigation = () => {
  const isMobie = useMedia('(max-width: 767px)');
  return (
    <div>
      {isMobie ? (
        <ListMob>
          <LinkMob to="/home">
            <HomeSvg />
          </LinkMob>
          <LinkMob to="/statistic">
            <StatisticSvg />
          </LinkMob>
          <LinkMob to="/currency">
            <CurrencySvg />
          </LinkMob>
        </ListMob>
      ) : (
        <List>
          <ItemLink>
            <Link to="/home">
              <HomeSvg />
              <LinkText>Home</LinkText>
            </Link>
          </ItemLink>

          <ItemLink>
            <Link to="/statistic">
              <StatisticSvg />
              <LinkText>Statistic</LinkText>
            </Link>
          </ItemLink>
        </List>
      )}
    </div>
  );
};

export default Navigation;
