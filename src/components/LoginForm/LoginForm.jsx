import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 500px;
`;

const LoginForm = () => {
    return (
        <div>
          <StyledForm>
            <input type="emuil" />
            <input type="password" />
           
            <button type="submit">Register</button>
            <Link to="/register">Login</Link>
          </StyledForm>
        </div>
      );
}
 
export default LoginForm;