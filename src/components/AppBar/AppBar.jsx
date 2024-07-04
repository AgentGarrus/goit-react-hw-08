import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      <nav>
        <div className="nav-right">
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <AuthNav />
          )}
        </div>
      </nav>
    </header>
  );
};

export default AppBar;