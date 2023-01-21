import { StyledButton } from './IconButton.styled';

const IconButton = ({ type = 'button', onClick, children, ...allyProps }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};

export default IconButton;
