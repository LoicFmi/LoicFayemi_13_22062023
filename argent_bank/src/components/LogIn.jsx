import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileFirstName } from './ProfileSlice';

export default function LogIn() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.login);
  const { firstName } = useSelector(state => state.profile);
  const localStorageFirstName = localStorage.getItem('firstName');

  useEffect(() => {
    if (localStorageFirstName) {
      dispatch(profileFirstName(localStorageFirstName));
    }
  }, [dispatch, localStorageFirstName]);

  return (
    <>
      {isAuth ? (
        <a className="main-nav-link" href="/Profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </a>
      ) : (
        <a className="main-nav-link" href="/Login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      )}
    </>
  );

  // return !isAuth && window.alert('Username ou Mot de passe incorrect');
}
