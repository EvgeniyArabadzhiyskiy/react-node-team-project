import { StyledCancelBtn } from './CancelButton.styled';

const CancelButton = ({ cancelText, onClick, ...allProps }) => {
  return (
    <StyledCancelBtn type="button" onClick={onClick} {...allProps}>
      {cancelText}
    </StyledCancelBtn>
  );
};

export default CancelButton;
