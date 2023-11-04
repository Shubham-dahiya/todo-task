import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import classes from './AuthForm.module.scss';

function Login() {
  const { verifyAuth, auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post('https://todo-backend-es98.onrender.com/api/auth/login', {
        email,
        password,
      });
      await verifyAuth();
      navigate('/');
    } catch (err) {
      console.log(err);
      verifyAuth();
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          email:
          <input id="email" type="email" placeholder="email" autoComplete="true" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            id="password"
            type="password"
            placeholder="password"
            autoComplete="true"
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
