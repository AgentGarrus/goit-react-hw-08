import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import './Navigation.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="nav-left">
      <Link to="/" className="homeleft">Home</Link>
      {isLoggedIn && <Link to="/contacts" className="homeleft">Contacts</Link>}
    </div>
  );
};

export default Navigation;