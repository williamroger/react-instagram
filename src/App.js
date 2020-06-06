import React, { useState } from 'react';

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

  const [posts, setPosts] = useState([
    {
      id: 1,
      user_name: 'Mestre Yoda',
      user_thumb: './img/profiles/yoda/yoda-profile.jpg',
      post_figure: './img/profiles/yoda/yoda-1.jpg',
      likes_number: 7,
      show_like: {
        user_name: 'Domino',
        user_thumb: './img/profiles/domino/domino-profile.jpg',
      },
      liked: false,
    },
    {
      id: 2,
      user_name: 'Gamora Zen',
      user_thumb: './img/profiles/gamora/gamora-profile.jpg',
      post_figure: './img/profiles/gamora/gamora-1.jpg',
      likes_number: 7,
      show_like: {
        user_name: 'Carol Danvers',
        user_thumb: './img/profiles/carol/carol-profile.jpg',
      },
      liked: false,
    },
    {
      id: 3,
      user_name: 'T\'Challa',
      user_thumb: './img/profiles/black-panther/black-panther-profile.jpg',
      post_figure: './img/profiles/black-panther/black-panther-1.jpg',
      likes_number: 5,
      show_like: {
        user_name: 'Bruce Wayne',
        user_thumb: './img/profiles/bruce/bruce-profile.jpg',
      },
      liked: false,
    },
    {
      id: 4,
      user_name: 'Carol Danvers',
      user_thumb: './img/profiles/carol/carol-profile.jpg',
      post_figure: './img/profiles/carol/carol-1.jpg',
      likes_number: 7,
      show_like: {
        user_name: 'Mestre Yoda',
        user_thumb: './img/profiles/yoda/yoda-profile.jpg',
      },
      liked: false,
    },
    {
      id: 5,
      user_name: 'Domino',
      user_thumb: './img/profiles/domino/domino-profile.jpg',
      post_figure: './img/profiles/domino/domino-1.jpg',
      likes_number: 3,
      show_like: {
        user_name: 'T\'Challa',
        user_thumb: './img/profiles/black-panther/black-panther-profile.jpg',
      },
      liked: false,
    },
    {
      id: 6,
      user_name: 'Bruce Wayne',
      user_thumb: './img/profiles/bruce/bruce-profile.jpg',
      post_figure: './img/profiles/bruce/bruce-1.jpg',
      likes_number: 4,
      show_like: {
        user_name: 'Gamora Zen',
        user_thumb: './img/profiles/gamora/gamora-profile.jpg',
      },
      liked: false,
    }
  ]);

  const handleLike = (id) => {
    const newPosts = posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          liked: !post.liked
        };
      }
      return post;
    });

    setPosts(newPosts);
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