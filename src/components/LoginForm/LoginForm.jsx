import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import schema from 'helpers';
import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  ErrorMsg,
  Border,
} from './LoginForm.styled';
import { useUserLoginMutation } from 'redux/WalletApiServise/wallet-api';
import { GoogleLink, StyledNavLink, SubmitBtn } from 'components/Buttons/Buttons.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [login_RTKQ, {isLoading}] = useUserLoginMutation()

  const handleSubmit = async (values, { resetForm }) => {
    await login_RTKQ(values)
    resetForm();

  };

  return (
    <Border>
      <FormWrap>
      {isLoading && <Spinner />}
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.login}
      >
        {({ isValid, dirty }) => (
          <StyledForm autoComplete="off">
            <Label>
              <EmailIcon />
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessage
                name="email"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              <PasswordIcon />
              <Input
                type={isHidePassword ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              {isHidePassword ? (
                <HiEye color='white' onClick={() => setIsHidePassword(false)} />
              ) : (
                <HiEyeOff color='white' onClick={() => setIsHidePassword(true)} />
              )}
              <ErrorMessage
                name="password"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <SubmitBtn type="submit" disabled={!(isValid && dirty)}>
              log in
            </SubmitBtn>
          </StyledForm>
        )}
      </Formik>
      <StyledNavLink to="/register">register</StyledNavLink>
      <GoogleLink as="a" href="https://wallet-backend-xmk0.onrender.com/auth-google/google" rel="noreferrer">
        <GoogleIcon />
        <span>GOOGLE</span>
      </GoogleLink>
    </FormWrap>
    </Border>
    
  );
};

export default LoginForm;
