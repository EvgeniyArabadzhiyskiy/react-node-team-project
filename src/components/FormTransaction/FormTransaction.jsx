import './rdt-styles.css';
import moment from "moment";
import Select from 'react-select';
import Datetime from 'react-datetime';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { modalClose } from "redux/modal/modalSlice";

import { Box } from "components/Box";
import SwithChecbox from "components/SwithChecbox";
import FormInput from "components/FormInput";
import DateInput from "components/TransactionForm/DateInput";
import { ErrorText } from "components/FormInput/FormInput.styled";
import { ButtonAdd, ButtonCancel } from "components/Buttons/Buttons.styled";
import { DateWrapper, SumWrapper } from "components/TransactionForm/TransactionForm.styled";

import { optionsExpense, optionsIncome } from "helpers/formAddTransaction/options";
import { selectStyles } from "helpers/formAddTransaction/selectStyles";
import { checksFutureDate } from "helpers/formAddTransaction/checksFutureDate";

const FormTransaction = ({ formik, setIsIncome, isIncome, submitText, cancelText }) => {
    const { setFieldValue, isSubmitting } = formik;

    const dispatch = useDispatch();
    const selectInputRef = useRef();

    const currentDate = moment().format('DD.MM.YYYY');

    const onChangeSwitch = e => {
        setIsIncome(e.target.checked);
        selectInputRef.current.clearValue();
     
    };

    const onCancelClick = () => {
        dispatch(modalClose(false));
      };

    return <>
        <SwithChecbox isIncome={isIncome} onChangeSwitch={onChangeSwitch} />

        <Box position="relative" marginBottom="28px">
            <Select
                ref={selectInputRef}
                name="category"
                options={ isIncome ? optionsIncome : optionsExpense}
                placeholder="Select a category"
                onChange={data => setFieldValue('category', data?.label)}
                styles={selectStyles}
            />
            <ErrorText component="div" name="category" />
        </Box>

        <DateWrapper>
            <SumWrapper>
                <FormInput type="number"  name="amount" placeholder="0.00" autoComplete="off" />
            </SumWrapper>
            
            <Datetime
                name="date"
                closeOnSelect
                initialValue={currentDate}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                isValidDate={checksFutureDate}
                onChange={e => setFieldValue('date', new Date(e).toString())}
                inputProps={{onKeyDown: e => e.preventDefault()}}
                renderInput={(p, openCalendar) => (
                <DateInput  props={p} onOpen={openCalendar}  />)}
            />
        </DateWrapper>

        <FormInput name="comment" placeholder="Comment" autoComplete="off" />
        
        <ButtonAdd type="submit" disabled={isSubmitting} >{submitText}</ButtonAdd>
        <ButtonCancel type="button" onClick={onCancelClick}>{cancelText}</ButtonCancel>
    </>
}
 
export default FormTransaction;