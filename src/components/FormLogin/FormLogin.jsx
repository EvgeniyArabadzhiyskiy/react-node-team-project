import { useState } from "react";

import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';

import { Box } from "components/Box";
import FormInput from "components/FormInput";
import EyesButton from "components/Buttons/EyesButton";
import EnterButton from "components/Buttons/EnterButton";
import ButtonLink from "components/Buttons/ButtonLink";
import GoogleAuthLink from "components/Buttons/GoogleAuthLink";


const FormLogin = ({ formik }) => {
    const { isValid, dirty, isSubmitting } = formik
    const isDisabled = !(isValid && dirty) || isSubmitting

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
            autoComplete="off"
            inputBtn={ <EyesButton isHidePass={isHidePassword} setIsHidePass={setIsHidePassword} />}
          />
        </Box>

        <EnterButton type='submit' enterText="log in"  disabled={isDisabled} />
        <ButtonLink to='/register' text='register' />
        <GoogleAuthLink />  
    </>
}
 
export default FormLogin;