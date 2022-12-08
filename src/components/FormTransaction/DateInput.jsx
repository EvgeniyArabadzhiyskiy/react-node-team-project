import { IconWrapper, OpenButton, StyledInput } from './DateInput.styled';
import { ReactComponent as Calendar } from '../../images/calender.svg';

const DateInput = ({ props, onOpen }) => {
  return (
    <IconWrapper>
      <StyledInput {...props} />
      <OpenButton type="button" onClick={onOpen}>
        <Calendar />
      </OpenButton>
    </IconWrapper>
  );
};

export default DateInput;
