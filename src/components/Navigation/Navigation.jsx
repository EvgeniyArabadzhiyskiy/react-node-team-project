import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/diagram">Statistic</NavLink>
    </div>
  );
};

export default Navigation;
