import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";
import Post from './components/Post';
import Story from './components/Stories';
import Header from './components/Header';

function App() {
  const [stories, setStories] = useState([
    {
      id: 1,
      user_thumb: './img/profiles/yoda/yoda-profile.jpg',
      user_name: 'Yoda',
      hasNewStory: false,
    },
    {
      id: 2,
      user_thumb: './img/profiles/gamora/gamora-profile.jpg',
      user_name: 'Gamora',
      hasNewStory: true,
    },
    {
      id: 3,
      user_thumb: './img/profiles/black-panther/black-panther-profile.jpg',
      user_name: 'T\'Challa',
      hasNewStory: false,
    }
  ]);

  return (
    <div>
      <Header />
      <section className="status">
        <div className="status__container">
          <ul className="status__list">
            {stories.map(story => <Story story={story} />)}
          </ul>
        </div>
      </section>

      <main className="feed">
        <div className="feed__container">
          <Post />
          <article className="feed__card">
            <header className="feed__header">
              <span>
                <a href="/" className="feed__avatar">
                  <img
                    src="./img/profiles/gamora/gamora-profile.jpg"
                    alt="user-gamora"
                  />
                </a>
                <a href="/" className="feed__name">
                  Gamora Zen
                </a>
              </span>
              <button className="feed__options">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </header>
            <div className="feed__image">
              <img
                src="./img/profiles/gamora/gamora-1.jpg"
                alt="photo-gamora"
              />
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
                  src="./img/profiles/carol/carol-profile.jpg"
                  alt="user-carol"
                />
              </a>
              <p>
                curtido por <a href="/">Carol Danvers</a> e outras{" "}
                <a href="/">7 pessoas</a>
              </p>
            </footer>
          </article>
          <article className="feed__card">
            <header className="feed__header">
              <span>
                <a href="/" className="feed__avatar">
                  <img
                    src="./img/profiles/black-panther/black-panther-profile.jpg"
                    alt="user-black-panther"
                  />
                </a>
                <a href="/" className="feed__name">
                  T'Challa
                </a>
              </span>
              <button className="feed__options">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </header>
            <div className="feed__image">
              <img
                src="./img/profiles/black-panther/black-panther-1.jpg"
                alt="photo-black-panther"
              />
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
                  src="./img/profiles/bruce/bruce-profile.jpg"
                  alt="user-bruce"
                />
              </a>
              <p>
                curtido por <a href="/">Bruce Wayne</a> e outras{" "}
                <a href="/">5 pessoas</a>
              </p>
            </footer>
          </article>
          <article className="feed__card">
            <header className="feed__header">
              <span>
                <a href="/" className="feed__avatar">
                  <img
                    src="./img/profiles/carol/carol-profile.jpg"
                    alt="user-carol"
                  />
                </a>
                <a href="/" className="feed__name">
                  Carol Danvers
                </a>
              </span>
              <button className="feed__options">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </header>
            <div className="feed__image">
              <img src="./img/profiles/carol/carol-1.jpg" alt="photo-carol" />
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
                  src="./img/profiles/yoda/yoda-profile.jpg"
                  alt="user-yoda"
                />
              </a>
              <p>
                curtido por <a href="/">Mestre Yoda</a> e outras{" "}
                <a href="/">7 pessoas</a>
              </p>
            </footer>
          </article>
          <article className="feed__card">
            <header className="feed__header">
              <span>
                <a href="/" className="feed__avatar">
                  <img
                    src="./img/profiles/domino/domino-profile.jpg"
                    alt="user-domino"
                  />
                </a>
                <a href="/" className="feed__name">
                  Domino
                </a>
              </span>
              <button className="feed__options">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </header>
            <div className="feed__image">
              <img
                src="./img/profiles/domino/domino-1.jpg"
                alt="photo-domino"
              />
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
                  src="./img/profiles/black-panther/black-panther-profile.jpg"
                  alt="user-black-panther"
                />
              </a>
              <p>
                curtido por <a href="/">T'Challa</a> e outras{" "}
                <a href="/">3 pessoas</a>
              </p>
            </footer>
          </article>
          <article className="feed__card">
            <header className="feed__header">
              <span>
                <a href="/" className="feed__avatar">
                  <img
                    src="./img/profiles/bruce/bruce-profile.jpg"
                    alt="user-bruce"
                  />
                </a>
                <a href="/" className="feed__name">
                  Bruce Wayne
                </a>
              </span>
              <button className="feed__options">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </header>
            <div className="feed__image">
              <img src="./img/profiles/bruce/bruce-1.jpg" alt="photo-bruce" />
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
                  src="./img/profiles/gamora/gamora-profile.jpg"
                  alt="user-gamora"
                />
              </a>
              <p>
                curtido por <a href="/">Gamora Zen</a> e outras{" "}
                <a href="/">2 pessoas</a>
              </p>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
