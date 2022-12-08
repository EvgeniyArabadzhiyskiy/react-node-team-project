import Datetime from 'react-datetime';
import moment from 'moment';
import { RxCross2 } from 'react-icons/rx';
import { ClearButton, Filter, InputWrapper } from './FilterDate.styled';

const FilterDate = ({ setMonth, setYear, value = 'Month' }) => {
  const changeDate = e => {
    const currentYear = moment(e).format('YYYY');
    const currentMonth = new Date(e).getMonth();

    if (!isNaN(currentYear) && currentYear) {
      setYear && setYear(currentYear);
    }

    if (!isNaN(currentMonth) && currentMonth) {
      setMonth && setMonth(String(currentMonth));
    }
  };

  const renderView = (mode, renderDefault) => {
    if (mode === 'months') {
      return <div className="style-month">{renderDefault()}</div>;
    }

    return renderDefault();
  };

  const renderFilterInput = props => {
    const clear = () => {
      props.onChange({ target: { value: '' } });

      setMonth && setMonth(null);
      setYear && setYear(null);
    };

    return (
      <InputWrapper>
        <Filter {...props} />
        <ClearButton onClick={clear}>
          <RxCross2  />
        </ClearButton>
      </InputWrapper>
    );
  };

  return (
    <Datetime
      name="date"
      closeOnSelect
      timeFormat={false}
      dateFormat={value === 'Month' ? 'MMMM' : 'YYYY'}
      
      onChange={changeDate}
      renderInput={renderFilterInput}
      renderView={(mode, renderDefault) => renderView(mode, renderDefault)}
      inputProps={{ placeholder: value, onKeyDown: e => e.preventDefault() }}
    />
  );
};

export default FilterDate;
