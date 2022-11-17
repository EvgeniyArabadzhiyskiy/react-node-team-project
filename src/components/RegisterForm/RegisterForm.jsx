import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 500px;
`;

const RegisterForm = () => {
  return (
    <div>
      <StyledForm>
        <input type="emuil" />
        <input type="password" />
        <input type="password" />
        <input type="text" />
        <button type="submit">Register</button>
        <Link to="/login">Login</Link>
      </StyledForm>
    </div>
  );
};

export default RegisterForm;
