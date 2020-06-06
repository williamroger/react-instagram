import React from 'react';

export default function Post({ post = {}, onClickLike }) {
  const {
    id,
    user_thumb,
    user_name,
    post_figure,
    likes_number,
    show_like,
    liked,
  } = post;

  return (
    <article className="post">
      <header className="post__header">
        <span>
          <a href={`/${user_name}`} className="post__avatar">
            <img src={user_thumb} alt={user_name} />
          </a>
          <a href={`/${user_name}`} className="post__name">
            {user_name}
          </a>
        </span>
        <button className="post__options">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </header>
      <div className="post__image">
        <img src={post_figure} alt={user_name} />
      </div>
      <div className="post__actions">
        <span>
          <button onClick={() => onClickLike(id)}>
            <i class={`${liked ? "fas" : "far"} fa-heart`}></i>
          </button>
          <button>
            <i className="far fa-comment"></i>
          </button>
        </span>
        <button>
          <i className="far fa-bookmark"></i>
        </button>
      </div>
      <footer className="post__footer">
        <a href={`/${show_like.user_name}`}>
          <img src={show_like.user_thumb} alt={show_like.user_name} />
        </a>
        <p>
          curtido por
          <a href={`/${show_like.user_name}`}>{show_like.user_name}</a>e outras
          <a href="/">{`${likes_number} ${
            likes_number > 1 ? "pessoas" : "pessoa"
          }`}</a>
        </p>
      </footer>
    </article>
  );
}