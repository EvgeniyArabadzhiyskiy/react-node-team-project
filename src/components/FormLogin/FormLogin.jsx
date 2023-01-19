import { useState } from "react";

import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'

import { Box } from "components/Box";
import FormInput from "components/FormInput";
import EyesButton from "components/EyesButton";
import { AUTH_GOOGLE, BASE_URL } from "constants/apiPath";
import { GoogleLink, StyledNavLink, SubmitBtn } from "components/Buttons/Buttons.styled";


const FormLogin = ({ formik, submitText }) => {
    const { isValid, dirty, isSubmitting } = formik
    const [isHidePassword, setIsHidePassword] = useState(true);

    return <>
        <Box marginBottom="28px" >
          <FormInput
            icon={ <EmailIcon />}
            type="email" 
            name="email" 
            placeholder="E-mail"
            autoComplete="off"
          />
        </Box>

        <Box marginBottom="28px" >
          <FormInput
            icon={ <PasswordIcon /> }
            type={isHidePassword ? 'password' : 'text'} 
            name="password" 
            placeholder="Password"
            inputBtn={ <EyesButton isHidePass={isHidePassword} setIsHidePass={setIsHidePassword} />}
          />
        </Box>

        <SubmitBtn type="submit" disabled={!(isValid && dirty) || isSubmitting}>
          {submitText}
        </SubmitBtn>

        <StyledNavLink to="/register">register</StyledNavLink>

        <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`}  rel="noreferrer">
          <GoogleIcon />  <span>GOOGLE</span>
        </GoogleLink>
    </>
}
 
export default FormLogin;