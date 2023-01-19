import { useState } from "react";

import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import { ReactComponent as UserIcon } from 'images/user.svg';
import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'

import { Box } from "components/Box";
import FormInput from "components/FormInput";
import EyesButton from "components/EyesButton";
import { AUTH_GOOGLE, BASE_URL } from "constants/apiPath";
import { GoogleLink, StyledNavLink, SubmitBtn } from "components/Buttons/Buttons.styled";
import { PasswordIndicator } from "components/RegistrationForm/RegistrationForm.styled";


const FormRegistration = ({ formik, submitText }) => {
    const { isValid, dirty, values, isSubmitting } = formik

    const [isHideFirstPass, setIsHideFirstPass] = useState(true);
    const [isHideSecondPass, setIsHideSecondPass] = useState(true);

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

        <Box marginBottom="28px" position="relative" >
            <FormInput
                icon={ <PasswordIcon /> }
                type={isHideFirstPass ? 'password' : 'text'} 
                name="password" 
                placeholder="Password"
                inputBtn={ <EyesButton isHidePass={isHideFirstPass} setIsHidePass={setIsHideFirstPass} /> }
            />
            {values.password && <PasswordIndicator lenth={values.password} />}
        </Box>

        <Box marginBottom="28px" position="relative" >
            <FormInput
                icon={ <PasswordIcon /> }
                type={isHideSecondPass ? 'password' : 'text'} 
                name="confirmPassword" 
                placeholder="Confirm password"
                inputBtn={ <EyesButton isHidePass={isHideSecondPass} setIsHidePass={setIsHideSecondPass} />}
            />
            {values.password && <PasswordIndicator lenth={values.password} />}
        </Box>

        <Box marginBottom="28px" >
            <FormInput
                icon={ <UserIcon />} 
                name="name" 
                placeholder="First name"
                autoComplete="off"
            />
        </Box>

        <SubmitBtn type="submit" disabled={!(isValid && dirty) || isSubmitting}>
            {submitText}
        </SubmitBtn>

        <StyledNavLink to="/login">log in</StyledNavLink>
        
        <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`} rel="noreferrer">
            <GoogleIcon /> <span>GOOGLE</span>
        </GoogleLink>
    </>
}
 
export default FormRegistration;