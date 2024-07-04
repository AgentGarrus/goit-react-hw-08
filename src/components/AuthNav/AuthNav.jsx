import { Link } from 'react-router-dom';
import './AuthNav.css'

const AuthNav = () => {
  return (
    <div className='authnavi'>
      <Link className='log' to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default AuthNav;