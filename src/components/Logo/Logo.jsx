import logo from '../../images/logo.png';
import logoBig from '../../images/logoBig.png';
import { LogoBox, LogoLink, LogoWallet } from './Logo.styled';
import { useMedia } from 'react-use';

const Logo = () => {
  const isWide = useMedia('(min-width: 768px)');

  return (
    <LogoBox>
      <LogoLink to="/home">
        {isWide ? (
          <LogoWallet src={logoBig} alt="logo" />
        ) : (
          <LogoWallet src={logo} alt="logo" />
        )}
        Wallet
      </LogoLink>
    </LogoBox>
  );
};

export default Logo;
