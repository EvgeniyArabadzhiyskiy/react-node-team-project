import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5';
import Logo from 'components/Logo';
import {
  StyledHeader,
  Container,
  UserBox,
  ButtonExit,
  Text,
  TextName,
} from './Header.styled';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';
import {
  toggleModalOverlay,
  toggleModalExit,
} from 'redux/transactions/transactionsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { firstName } = useSelector(state => state.auth.user);

  const handleClick = () => {
    dispatch(toggleModalOverlay(true));
    dispatch(toggleModalExit(true));
  };

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <UserBox>
          <ThemeToggle />
          <TextName>{firstName}</TextName>
          <IconContext.Provider value={{ color: '#BDBDBD', size: '25' }}>
            <ButtonExit onClick={handleClick}>
              <IoExitOutline />
              <Text>Exit</Text>
            </ButtonExit>
          </IconContext.Provider>
        </UserBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
