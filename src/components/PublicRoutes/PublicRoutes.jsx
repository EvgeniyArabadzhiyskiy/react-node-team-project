import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false, navigateTo = '/login' }) => {
  const { isAuth } = useSelector(state => state.auth);
  const shouldRedirect = isAuth && restricted;

  return <>{shouldRedirect ? <Navigate to={navigateTo} /> : children}</>;
};

export default PublicRoute;
