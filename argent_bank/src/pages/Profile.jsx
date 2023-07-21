import React from 'react';
import { userData } from '../services/userService';
import { useDispatch } from 'react-redux';
import {
  profileFirstName,
  profileLastName,
  profileError
} from '../components/ProfileSlice';
import HandleName from '../components/HandleName';
import Account from '../components/Account';
import axios from 'axios';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default function Profile() {
  const dispatch = useDispatch();

  userData()
    .then(data => {
      dispatch(profileFirstName(data.body.firstName));
      dispatch(profileLastName(data.body.lastName));
    })
    .catch(error => dispatch(profileError(error.response.data.message)));

  return (
    <main className="main bg-dark">
      <HandleName />
      <Account />
    </main>
  );
}
