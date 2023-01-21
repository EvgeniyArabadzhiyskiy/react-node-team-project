import { GoogleLink } from '../Buttons.styled';
import { AUTH_GOOGLE, BASE_URL } from 'constants/apiPath';
import { ReactComponent as GoogleIcon } from 'images/icons8-google.svg';

const GoogleAuthLink = () => {
  return (
    <GoogleLink as="a" href={`${BASE_URL}${AUTH_GOOGLE}`} rel="noreferrer">
      <GoogleIcon /> <span>GOOGLE</span>
    </GoogleLink>
  );
};

export default GoogleAuthLink;
