import React from 'react';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import LogOut from './LogOut';
import LogIn from './LogIn';

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <LogIn />
          <LogOut />
        </div>
      </nav>
    </header>
  );
}
