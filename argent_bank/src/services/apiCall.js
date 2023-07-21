import axios from 'axios';
import jwtDecode from 'jwt-decode';

export async function login(credentials) {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      credentials
    );
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + response.data.body.token;
    const { token } = response.data.body;
    localStorage.setItem('authToken', token);

    if (isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error);
  }
}

function isAuthenticated() {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
      return true;
    }
  }
  return false;
}

const authAPI = {
  isAuthenticated
};

export default authAPI;
