import axios from 'axios';
import { mainDataModel } from './dataModels';

export async function userData() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post('http://localhost:3001/api/v1/user/profile');
      const result = mainDataModel.fromApiData(res.data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export async function userLogin(credentials) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        credentials
      );
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      else delete axios.defaults.headers.common['Authorization'];
      const result = mainDataModel.fromApiData(res.data);
      resolve(result);
      console.log(res.data);
      console.log(result);
    } catch (error) {
      reject(error);
    }
  });
}

export async function userUpdate(userName) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        userName
      );
      const result = mainDataModel.fromApiData(res.data);
      resolve(result);
      console.log(res.data);
      console.log(result);
    } catch (error) {
      console.log('error userUpDate');
      console.log(error);
      reject(error);
    }
  });
}
