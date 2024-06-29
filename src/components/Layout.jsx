import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors.js';
import { logoutUser } from '../redux/auth/operations.js';
import './Layout.css';

const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <header>
        <nav>
          <div className="nav-left">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-right">
            {isLoggedIn ? (
              <>
                <Link to="/contacts">Contacts</Link>
                <button onClick={handleLogout}>Logout</button>
                <span>{user.name}</span>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;