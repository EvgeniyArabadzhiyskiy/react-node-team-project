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
          <Link to="/home">
            <ItemLink>
              <HomeSvg />
              <LinkText>Home</LinkText>
            </ItemLink>
          </Link>

          <Link to="/statistic">
            <ItemLink>
              <StatisticSvg />
              <LinkText>Statistic</LinkText>
            </ItemLink>
          </Link>
        </List>
      )}
    </div>
  );
};

export default Navigation;
