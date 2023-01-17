import { Input, Label, ErrorText } from 'components/LoginForm/LoginForm.styled';

const FormInput = ({
  name, type = 'text', inputBtn = null, icon = null, placeholder = null, autoComplete,
}) => {
  return (
    <Label>
      {icon}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {inputBtn}
      <ErrorText component="div" name={name} />
    </Label>
  );
};

export default FormInput;
