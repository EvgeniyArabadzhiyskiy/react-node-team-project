import { StyledLink } from '../Buttons.styled';

const ButtonLink = ({ text, to }) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

export default ButtonLink;
