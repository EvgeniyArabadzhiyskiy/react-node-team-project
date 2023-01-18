// import {  useState } from 'react';
// import { Form, Formik } from 'formik';
import { useScaleForm } from 'hooks/useScaleForm';
// import { HiEyeOff, HiEye } from 'react-icons/hi';
import schema from 'helpers';
import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
// import { ReactComponent as EmailIcon } from 'images/email.svg';
// import { ReactComponent as PasswordIcon } from 'images/password.svg';
// import { ReactComponent as UserIcon } from 'images/user.svg';
// import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'
// import {
  // Label,
  // Input,
  // ErrorMsg,
  // StyledForm,
  // LogoWrap,
  // PasswordIndicator,
// } from './RegistrationForm.styled';
import { useUserRegistrationMutation } from 'redux/walletsApiServise/wallet-api';
// import { GoogleLink, StyledNavLink, SubmitBtn } from 'components/Buttons/Buttons.styled';
// import { AUTH_GOOGLE, BASE_URL } from 'constants/apiPath';

import { FormWrap, LogoWrap } from 'components/LoginForm/LoginForm.styled';
// import FormInput from 'components/FormInput';
// import { Box } from 'components/Box';
import FormDefault from 'components/FormDefault';
import FormRegistration from 'components/FormRegistration';



const RegisterForm = () => {
  const isScale = useScaleForm()

  // const [isHideFirstPass, setIsHideFirstPass] = useState(true);
  // const [isHideSecondPass, setIsHideSecondPass] = useState(true);
  const [register_RTKQ, {isLoading}] = useUserRegistrationMutation()

  const handleSubmit = async ({ email, password, name: firstName },{ resetForm }) => {
    const user = { email, password, firstName }

    await register_RTKQ(user)
    resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

  return (  
    <FormWrap isScale={isScale}>
      {isLoading && <Spinner />}

      <LogoWrap><Logo /></LogoWrap>

      <FormDefault 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.register}

        submitText="register"
        render={(props) => <FormRegistration data={props} /> }
      />


      {/* <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.register}
      >
        {({ isValid, dirty, values }) => (
          <Form autoComplete="off">

            <Box marginBottom="28px" >
              <FormInput
                icon={ <EmailIcon />}
                type="email" 
                name="email" 
                placeholder="E-mail"
              />
            </Box>

            <Box marginBottom="28px" position="relative" >
              <FormInput
                icon={ <PasswordIcon /> }
                type={isHideFirstPass ? 'password' : 'text'} 
                name="password" 
                placeholder="Password"
                inputBtn={ <EyesButton type="button" onClick={() => setIsHideFirstPass(p=> !p)}>
                        {isHideFirstPass ? <HiEye color='white' /> : <HiEyeOff color='white' />}
                      </EyesButton>}
              />
              {values.password && <PasswordIndicator lenth={values.password} />}
            </Box>

            <Box marginBottom="28px" position="relative" >
              <FormInput
                icon={ <PasswordIcon /> }
                type={isHideSecondPass ? 'password' : 'text'} 
                name="confirmPassword" 
                placeholder="Confirm password"
                inputBtn={ <EyesButton type="button" onClick={() => setIsHideSecondPass(p=> !p)}>
                        {isHideSecondPass ? <HiEye color='white' /> : <HiEyeOff color='white' />}
                      </EyesButton>}
              />
              {values.password && <PasswordIndicator lenth={values.password} />}
            </Box>

            <Box marginBottom="28px" >
              <FormInput
                icon={ <UserIcon />} 
                name="name" 
                placeholder="First name"
              />
            </Box>

            <SubmitBtn type="submit" disabled={!(isValid && dirty)}>
              register
            </SubmitBtn>

            <StyledNavLink to="/login">log in</StyledNavLink>
      <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`} rel="noreferrer">
        <GoogleIcon />
        <span>GOOGLE</span>
      </GoogleLink>
          </Form>
        )}
      </Formik> */}
      
    </FormWrap>
  );
};

export default RegisterForm;
