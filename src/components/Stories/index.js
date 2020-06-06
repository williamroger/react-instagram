import React from 'react';

export default function Story({ story = {} }) {
  const { user_thumb, user_name, hasNewStory } = story;

  return (
    <li className={`status__item ${hasNewStory ? 'status__item--active' : ''}`}>
      <a href={`/${user_name}`}>
        <img
          src={user_thumb}
          alt={user_name}
        />
      </a>
    </li>
  );
}