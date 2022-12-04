import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, navigateTo = '/login' }) => {
  const { isLoggedIn  } = useSelector(state => state.auth);

  return isLoggedIn  ? children : <Navigate to={navigateTo} />;
};

export default PrivateRoute;