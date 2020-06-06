import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img src="./img/instagram-logo.svg" alt="Logo Instagram" />
        </a>
        <button className="header__direct">
          <i className="far fa-paper-plane"></i>
        </button>
      </div>
    </header>
  );
}