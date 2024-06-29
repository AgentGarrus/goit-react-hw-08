import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signupUser } from '../../redux/auth/operations.js';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signupUser({ name, email, password }));
  };

return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='regform' type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;