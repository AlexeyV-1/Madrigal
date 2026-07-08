'use client';

import { useState } from 'react';
import styles from '../../../src/styles/components/searchBar.module.scss';

const IconSearch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconMic = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13M12 2v9"></path>
  </svg>
);

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleVoice = () => {
    setIsVoiceActive((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Введите ваш запрос"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter'}
        className={styles.input}
      />

      <button
        type="button"
        className={styles.btnSearch}
        aria-label="Выполнить поиск"
      >
        <IconSearch />
      </button>

      <button
        type="button"
        onClick={handleVoice}
        className={`${styles.btnVoice} ${isVoiceActive ? styles.active : ''}`}
        aria-label={isVoiceActive ? 'Остановить голосовой ввод' : 'Голосовой запрос'}
      >
        <IconMic />
      </button>
    </div>
  );
}