import { useLocation } from 'react-router-dom';

import LoginForm from 'components/LoginForm';
// import SharedLayout from 'components/SharedLayout';
import RegistrationForm from 'components/RegistrationForm';
import { Section, Container, Wrapper } from './LoginPage.styled';

const LoginPage = () => {
  const location = useLocation();

  return (
    <Section>
      <Container>
        <Wrapper>
          {location.pathname === '/login' ? (
            <LoginForm />
          ) : (
            <RegistrationForm />
          )}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default LoginPage;
