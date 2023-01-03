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
import { modalExitOpen } from 'redux/modal/modalSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { firstName } = useSelector(state => state.auth.user);

  const onBtnExitClick = () => {
    dispatch(modalExitOpen(true));
  };

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <UserBox>
          <ThemeToggle />
          <TextName>{firstName}</TextName>
          <IconContext.Provider value={{ color: '#BDBDBD', size: '25' }}>
            <ButtonExit onClick={onBtnExitClick}>
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
