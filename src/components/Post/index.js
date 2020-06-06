import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  return (
    <article className="feed__card">
      <header className="feed__header">
        <span>
          <a href="/" className="feed__avatar">
            <img
              src="./img/profiles/yoda/yoda-profile.jpg"
              alt="user-yoda"
            />
          </a>
          <a href="/" className="feed__name">
            Yoda
          </a>
        </span>
        <button className="feed__options">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </header>
      <div className="feed__image">
        <img src="./img/profiles/yoda/yoda-1.jpg" alt="photo-yoda" />
      </div>
      <div className="feed__actions">
        <span>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faComment} />
          </button>
        </span>
        <button>
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
      <footer className="feed__footer">
        <a href="/">
          <img
            src="./img/profiles/domino/domino-profile.jpg"
            alt="user-domino"
          />
        </a>
        <p>
          curtido por <a href="/">Domino</a> e outras{" "}
          <a href="/">7 pessoas</a>
        </p>
      </footer>
    </article>
  );
}