import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import './UserMenu.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className='loggingoutuser'>
      <span className='nameu'>Welcome {user.name}</span>
      <Link to="/logout" onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default UserMenu;