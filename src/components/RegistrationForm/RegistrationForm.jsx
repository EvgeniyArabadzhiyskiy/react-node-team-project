import { Formik, ErrorMessage } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { userRegistration } from 'redux/auth/authOperation';
import { useState } from 'react';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import schema from 'helpers';
import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import { ReactComponent as UserIcon } from 'images/user.svg';
import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  ErrorMsg,
  SubmitBtn,
  StyledNavLink,
  PasswordIndicator,
  GoogleLink,
} from './RegistrationForm.styled';
import { useUserRegistrationMutation } from 'redux/WalletApiServise/wallet-api';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};

const RegisterForm = () => {
  const [isHideFirstPass, setIsHideFirstPass] = useState(true);
  const [isHideSecondPass, setIsHideSecondPass] = useState(true);
  const [register_RTKQ, {isLoading}] = useUserRegistrationMutation()

  const handleSubmit = async ({ email, password, name: firstName },{ resetForm }) => {
    const user = { email, password, firstName }

    await register_RTKQ(user)
    // dispatch(userRegistration({ email, password, firstName }));
    resetForm();
  };

  return (
    <FormWrap>
      {isLoading && <Spinner />}
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.register}
      >
        {({ isValid, dirty, values }) => (
          <StyledForm autoComplete="off">
            <Label>
              <EmailIcon />
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessage
                name="email"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label passwordlength={values.password.length}>
              <PasswordIcon />
              <Input
                type={isHideFirstPass ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              {isHideFirstPass ? (
                <HiEye onClick={() => setIsHideFirstPass(false)} />
              ) : (
                <HiEyeOff onClick={() => setIsHideFirstPass(true)} />
              )}
              {values.password && <PasswordIndicator lenth={values.password} />}
              <ErrorMessage
                name="password"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              <PasswordIcon />
              <Input
                type={isHideSecondPass ? 'password' : 'text'}
                name="confirmPassword"
                placeholder="Confirm password"
              />
              {isHideSecondPass ? (
                <HiEye onClick={() => setIsHideSecondPass(false)} />
              ) : (
                <HiEyeOff onClick={() => setIsHideSecondPass(true)} />
              )}
              {values.confirmPassword && (
                <PasswordIndicator lenth={values.confirmPassword} />
              )}
              <ErrorMessage
                name="confirmPassword"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              <UserIcon />
              <Input type="text" name="name" placeholder="First name" />
              <ErrorMessage
                name="name"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <SubmitBtn as="button" type="submit" disabled={!(isValid && dirty)}>
              register
            </SubmitBtn>
          </StyledForm>
        )}
      </Formik>
      <StyledNavLink as={Link} to="/login">log in</StyledNavLink>
      <GoogleLink as="a" href="https://wallet-backend-xmk0.onrender.com/auth-google/google" rel="noreferrer">
        <GoogleIcon />
        <span>GOOGLE</span>
      </GoogleLink>
    </FormWrap>
  );
};

export default RegisterForm;
