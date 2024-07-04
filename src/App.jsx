import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { refreshUser, logoutUser } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Routes>
         <Route path="/" element={<Layout handleLogout={handleLogout} />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="/logout" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;