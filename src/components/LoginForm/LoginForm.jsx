import { Formik } from 'formik';
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
  // Label,
  // Input,
  // ErrorMsg,
  EyesButton,
} from './LoginForm.styled';
import { useUserLoginMutation } from 'redux/walletsApiServise/wallet-api';
import { GoogleLink, StyledNavLink, SubmitBtn } from 'components/Buttons/Buttons.styled';
import { AUTH_GOOGLE, BASE_URL } from 'constants/apiPath';
import { useScaleForm } from 'hooks/useScaleForm';
import { Box } from 'components/Box';
import FormInput from 'components/FormInput/FormInput';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const isScale = useScaleForm()
  // console.log("EmailIcon", EmailIcon);

  const [isHidePassword, setIsHidePassword] = useState(true);
  const [login_RTKQ, {isLoading}] = useUserLoginMutation()

  const handleSubmit = async (values, { resetForm }) => {
    await login_RTKQ(values)
    resetForm();

  };

  return (
      <FormWrap isScale={isScale}>
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
          <StyledForm autoComplete="off" >

            <Box marginBottom="28px" >
              <FormInput
                icon={ <EmailIcon />}
                type="email" 
                name="email" 
                placeholder="E-mail"
              />
            </Box>

            <Box marginBottom="28px" >
              <FormInput
                icon={ <PasswordIcon /> }
                type={isHidePassword ? 'password' : 'text'} 
                name="password" 
                placeholder="Password"
                inputBtn={ <EyesButton type="button" onClick={() => setIsHidePassword(p=> !p)}>
                            {isHidePassword ? <HiEye color='white' /> : <HiEyeOff color='white' />}
                           </EyesButton>}
              />
            </Box>

            {/* <Label>
                    <EmailIcon />
                    <Input 
                      type="email" 
                      name="email" 
                      placeholder="E-mail"
                      autoComplete="off"
                      />
                    <ErrorMsg component="div" name="email" />
              </Label> */}

           {/* <Box marginTop="28px" >
            <Label>
                <PasswordIcon />
                <Input
                  type={isHidePassword ? 'password' : 'text'}
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                {isHidePassword ? (
                  <HiEye color='white' onClick={() => setIsHidePassword(false)} />
                ) : (
                  <HiEyeOff color='white' onClick={() => setIsHidePassword(true)} />
                )}
                <ErrorMsg component="div" name="password" />
              </Label>
            </Box> */}

                  

            
            
            <SubmitBtn type="submit"  >
              log in
            </SubmitBtn>
          </StyledForm>
        )}
      </Formik>
      <StyledNavLink to="/register">register</StyledNavLink>
      <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`}  rel="noreferrer">
        <GoogleIcon />
        <span>GOOGLE</span>
      </GoogleLink>
    </FormWrap>
  );
};

export default LoginForm;