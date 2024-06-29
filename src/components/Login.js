import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/login.css';
import body from '../assets/icons/girl.png';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const data1 = await res.json();
    alert(data1.message);

    if (data1.success) {
      if (
        data1.user.email === 'omtrivedioo3@gmail.com' &&
        data1.user.password === '12345678'
      ) {
        navigate('/admin');
      } else if (
        data1.user.email === 'diya@gmail.com' &&
        data1.user.password === '12345678'
      ) {
        navigate('/trainee');
      } else {
        navigate('/user');
      }
    }
  };

  return (
    <div className="contact">
      <div id="formContent">
        <motion.form
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="card-body"
          onSubmit={loginUser}
        >
          <h2>Log In</h2>
          <input
            type="text"
            id="login"
            className="fadeIn second form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="User Email"
          />
          <input
            id="password"
            className="fadeIn third form-control "
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </motion.form>
      </div>

      <motion.div
        className="formBorder"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          initial={{ y: '-100vh', x: '50%', opacity: 0 }}
          animate={{ x: '50%', y: '-50%', opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <img src={body} alt="Body" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
