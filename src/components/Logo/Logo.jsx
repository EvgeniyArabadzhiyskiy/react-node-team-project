import logo from '../../images/logo.png';
import logoBig from '../../images/logoBig.png';
import { LogoBox, LogoLink, LogoText, LogoWallet } from './Logo.styled';
import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';

const Logo = () => {
  const location = useLocation();
  const isDesctop = useMedia('(min-width: 768px)');

  const isLoginPage =
  location.pathname === '/login' || 
  location.pathname === '/register';

  return (
    <LogoBox>
      <LogoLink to={isLoginPage ? '/login' : '/home'}>
        {isDesctop ? (
          <LogoWallet src={logoBig} alt="logo" />
        ) : (
          <LogoWallet src={logo} alt="logo" />
        )}
        <LogoText isLoginPage={isLoginPage}>Wallet</LogoText>
      </LogoLink>
    </LogoBox>
  );
};

export default Logo;
