import loginReducer from './components/LoginSlice';
import profileReducer from './components/ProfileSlice';
import { configureStore } from '@reduxjs/toolkit';

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer
  },
  reduxDevtools
});

export default store;
