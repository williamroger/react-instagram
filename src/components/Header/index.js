import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img src="./img/instagram-logo.svg" alt="Logo Instagram" />
        </a>
        <button className="header__direct">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </header>
  );
}