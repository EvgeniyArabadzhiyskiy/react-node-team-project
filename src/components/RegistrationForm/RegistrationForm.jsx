import schema from 'helpers';
import { useScaleForm } from 'hooks/useScaleForm';

import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
import FormDefault from 'components/FormDefault';
import FormRegistration from 'components/FormRegistration';
import { FormWrap, LogoWrap } from 'components/LoginForm/LoginForm.styled';

import { useUserRegistrationMutation } from 'redux/walletsApiServise/wallet-api';

const RegisterForm = () => {
  const isScale = useScaleForm()
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
        render={(props) => <FormRegistration formik={props} submitText="register" /> }
      />

    </FormWrap>
  );
};

export default RegisterForm;
