import { ErrorText, Input, Label } from './FormInput.styled';

const FormInput = ({
  name,
  type = 'text',
  inputBtn = null,
  icon = null,
  ...allProps
}) => {
  
  return (
    <Label>
      {icon}
      <Input type={type} name={name} {...allProps} />
      {inputBtn}
      <ErrorText component="div" name={name} />
    </Label>
  );
};

export default FormInput;
