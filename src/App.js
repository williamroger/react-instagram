import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setLike } from "./actions";

import Post from './components/Post';
import Story from './components/Stories';
import Header from './components/Header';

function App() {
  const { stories, posts } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch(setLike(id));
  }

  return (
    <div>
      <Header />

      <section className="status">
        <div className="status__container">
          <ul className="status__list">
            {stories.map((story) => (
              <Story key={story.id} story={story} />
            ))}
          </ul>
        </div>
      </section>

      <main className="posts">
        <div className="posts__container">
          {posts.map((post) => (
            <Post key={post.id} post={post} onClickLike={handleLike} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;