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
import { breakpoints } from 'styles/breakpoints';

const Navigation = () => {
  const isMobile = useMedia(breakpoints.small);
  const isDesctop = useMedia(breakpoints.medium);

  return (
    <div>
      {isMobile && (
        <ListMob>
          <LinkMob to="/home"><HomeSvg /></LinkMob>
          <LinkMob to="/statistic"><StatisticSvg /></LinkMob>
          <LinkMob to="/currency"><CurrencySvg /></LinkMob>
        </ListMob>
      )} 

      {isDesctop && (
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
