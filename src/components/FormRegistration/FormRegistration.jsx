import { useState } from "react";

import { Box } from "components/Box";
import FormInput from "components/FormInput";
import { EyesButton } from "components/LoginForm/LoginForm.styled";

import { HiEyeOff, HiEye } from 'react-icons/hi';
import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import { ReactComponent as UserIcon } from 'images/user.svg';
import { ReactComponent as GoogleIcon} from 'images/icons8-google.svg'
import { GoogleLink, StyledNavLink, SubmitBtn } from "components/Buttons/Buttons.styled";
import { AUTH_GOOGLE, BASE_URL } from "constants/apiPath";
import { PasswordIndicator } from "components/RegistrationForm/RegistrationForm.styled";


const FormRegistration = ({data}) => {
    const {isValid, dirty, values, isSubmitting, submitText} = data

    const [isHideFirstPass, setIsHideFirstPass] = useState(true);
    const [isHideSecondPass, setIsHideSecondPass] = useState(true);

    return <>
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