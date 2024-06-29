import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUser } from '../../redux/auth/operations.js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className='loginform' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;