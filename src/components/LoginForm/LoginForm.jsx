// import { Form, Formik } from 'formik';
// import { useState } from 'react';
// import { HiEyeOff, HiEye } from 'react-icons/hi';
import schema from 'helpers';
import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
// import { ReactComponent as EmailIcon } from 'images/email.svg';

// import { ReactComponent as PasswordIcon } from 'images/password.svg';
// import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'
import {
  FormWrap,
  LogoWrap,
  // StyledForm,
  // Label,
  // Input,
  // ErrorMsg,
  // EyesButton,
} from './LoginForm.styled';
import { useUserLoginMutation } from 'redux/walletsApiServise/wallet-api';
// import { GoogleLink, StyledNavLink, SubmitBtn } from 'components/Buttons/Buttons.styled';
// import { AUTH_GOOGLE, BASE_URL } from 'constants/apiPath';
import { useScaleForm } from 'hooks/useScaleForm';
// import { Box } from 'components/Box';
// import FormInput from 'components/FormInput';
import FormDefault from 'components/FormDefault';
import FormLogin from 'components/FormLogin';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const isScale = useScaleForm()

  // const [isHidePassword, setIsHidePassword] = useState(true);
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


      <FormDefault 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.login}
        render={(props) => <FormLogin formik={props} submitText="Log in" /> }
      />

      {/* <FormDefault 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.login}
        setIsValid={setIsValid}
        setDirty={setDirty}
      >

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

        <SubmitBtn type="submit" disabled={!(isValid && dirty)} >
          log in
        </SubmitBtn>

        <StyledNavLink to="/register">register</StyledNavLink>

        <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`}  rel="noreferrer">
          <GoogleIcon />  <span>GOOGLE</span>
        </GoogleLink>

      </FormDefault> */}

      {/* <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.login}
      >
        {({ isValid, dirty, isSubmitting }) => {

console.log("LoginForm  isValid", isSubmitting);
          
          return <Form autoComplete="off" >

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

          <SubmitBtn type="submit"  >
            log in
          </SubmitBtn>

          <StyledNavLink to="/register">register</StyledNavLink>

          <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`}  rel="noreferrer">
            <GoogleIcon />  <span>GOOGLE</span>
          </GoogleLink>

        </Form>
        } }
      </Formik> */}
     
    </FormWrap>
  );
};
        

export default LoginForm;