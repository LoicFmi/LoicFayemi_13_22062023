import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Refresh from './components/Refresh';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Refresh />}>
              <Route path="/Profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </Provider>
  );
}
