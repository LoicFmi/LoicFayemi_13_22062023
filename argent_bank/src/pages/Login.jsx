import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../services/userService';
import { useDispatch } from 'react-redux';
import {
  loginPending,
  loginSuccess,
  loginError
} from '../components/LoginSlice';

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    email: '',
    password: ''
  });

  function change({ currentTarget }) {
    const { value, name } = currentTarget;
    setcredentials({
      ...credentials,
      [name]: value
    });
  }

  async function submit(e) {
    e.preventDefault();

    dispatch(loginPending());
    try {
      const isAuth = await userLogin(credentials);

      localStorage.setItem('token', isAuth.body.token);

      dispatch(loginSuccess());
      navigate('/Profile');
    } catch (error) {
      console.log(error);
      window.alert('Username ou Password incorrect');
      dispatch(loginError(error.response.data.message));
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={submit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="email" onChange={change} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={change}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </>
  );
}
