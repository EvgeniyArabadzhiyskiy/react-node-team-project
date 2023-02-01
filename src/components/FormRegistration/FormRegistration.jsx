import { useState } from "react";

import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import { ReactComponent as UserIcon } from 'images/user.svg';

import { Box } from "components/Box";
import FormInput from "components/FormInput";
import EyesButton from "components/Buttons/EyesButton";
import { PasswordIndicator } from "./FormRegistration.styled";
import EnterButton from "components/Buttons/EnterButton";
import ButtonLink from "components/Buttons/ButtonLink";
import GoogleAuthLink from "components/Buttons/GoogleAuthLink";

const FormRegistration = ({ formik }) => {
    const { isValid, dirty, values, isSubmitting } = formik
    const isDisabled = !(isValid && dirty) || isSubmitting

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
                autoComplete="off"
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
                autoComplete="off"
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

        <EnterButton type='submit' enterText="registr"  disabled={isDisabled} />
        <ButtonLink to='/login' text='log in' />
        <GoogleAuthLink />
    </>
}
 
export default FormRegistration;