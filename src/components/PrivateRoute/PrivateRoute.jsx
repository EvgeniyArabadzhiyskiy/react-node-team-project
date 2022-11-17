import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, navigateTo = '/login' }) => {
  const { isAuth } = useSelector(state => state.auth);

  return isAuth ? children : <Navigate to={navigateTo} />;
};

export default PrivateRoute;
