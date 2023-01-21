import { StyledEnterBtn } from './EnterButton.styled';

const EnterButton = ({ type = 'text', onClick = null, enterText, ...allProps }) => {
  return (
    <StyledEnterBtn type={type} onClick={onClick} {...allProps}>
      {enterText}
    </StyledEnterBtn>
  );
};

export default EnterButton;
