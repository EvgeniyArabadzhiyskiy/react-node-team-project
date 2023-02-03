import schema from 'helpers';

import { useScaleForm } from 'hooks';
import { useUserLoginMutation } from 'redux/walletsApiServise/userApi';

import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
import FormLogin from 'components/FormLogin';
import FormDefault from 'components/FormDefault';
import { FormWrap, LogoWrap } from './LoginForm.styled';

const LoginForm = () => {
  const isScale = useScaleForm()
  const [login_RTKQ, {isLoading}] = useUserLoginMutation()

  const handleSubmit = async (values, { resetForm }) => {
    await login_RTKQ(values)
    resetForm();

  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <FormWrap isScale={isScale}>
      {isLoading && <Spinner />}

      <LogoWrap><Logo /></LogoWrap>

      <FormDefault 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.login}
        render={(props) => <FormLogin formik={props} />}
      />

    </FormWrap>
  );
};
        

export default LoginForm;