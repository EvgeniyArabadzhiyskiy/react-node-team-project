import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Switch,
  TextExpense,
  TextIncome,
} from './SwithChecbox.styled';

import { ReactComponent as Plus } from '../../images/plus.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';

const SwithChecbox = ({ isIncome, onChangeSwitch }) => {
  return (
    <CheckBoxWrapper>
      <TextIncome isChecked={isIncome}>Income</TextIncome>
      <CheckBoxLabel>
        <CheckBox
          type="checkbox"
          name="typeOperation"
          role="switch"
          checked={isIncome}
          onChange={onChangeSwitch}
        />
        <Switch isChecked={isIncome}>{isIncome ? <Plus /> : <Minus />}</Switch>
      </CheckBoxLabel>
      <TextExpense isChecked={isIncome}>Expense</TextExpense>
    </CheckBoxWrapper>
  );
};

export default SwithChecbox;
