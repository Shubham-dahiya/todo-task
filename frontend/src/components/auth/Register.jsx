import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import classes from './AuthForm.module.scss';

function Register() {
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axios.post('https://todo-backend-es98.onrender.com/api/auth/register', user);
      toast.success('Registered successfully');
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Register</h1>
      <form className={classes.authForm} onSubmit={register}>
        <label htmlFor="name">
          Full Name:
          <input id="name" type="text" placeholder="Full Name" autoComplete="true" required />
        </label>
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
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
