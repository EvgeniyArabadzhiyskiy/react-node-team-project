import { HiEyeOff, HiEye } from 'react-icons/hi';
import { StyledButton } from 'components/LoginForm/LoginForm.styled';

const EyesButton = ({ isHidePass, setIsHidePass }) => {
  return (
    <StyledButton type="button" onClick={() => setIsHidePass(s => !s)}>
      {isHidePass ? <HiEye color="white" /> : <HiEyeOff color="white" />}
    </StyledButton>
  );
};

export default EyesButton;
