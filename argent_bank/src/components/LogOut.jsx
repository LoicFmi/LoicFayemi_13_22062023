import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginOut } from './LoginSlice';
import { profileOut } from './ProfileSlice';

export default function LogOut() {
  const { isAuth } = useSelector(state => state.login);
  const dispatch = useDispatch();

  function ClearLocalStorage() {
    localStorage.clear();

    dispatch(loginOut());
    dispatch(profileOut());
  }

  return (
    <>
      {isAuth && (
        <a
          className="main-nav-item"
          onClick={() => ClearLocalStorage()}
          href="/"
        >
          <i className="fa-solid fa-arrow-right-from-bracket" />
          Sign Out
        </a>
      )}
    </>
  );
}
