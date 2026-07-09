'use client';

import { useState } from 'react';
import styles from '../../../src/styles/components/searchBar.module.scss';
import { Icon } from '../../../src/components/Сommon/Icon';


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
        disabled={isVoiceActive}
        className={styles.input}
      />

      <button
        type="button"
        className={styles.btnSearch}
        aria-label="Выполнить поиск"
      >
        <Icon role="search" />
      </button>

      <button
        type="button"
        onClick={handleVoice}
        className={`${styles.btnVoice} ${isVoiceActive ? styles.active : ''}`}
        aria-label={isVoiceActive ? 'Остановить голосовой ввод' : 'Голосовой запрос'}
      >

        <div className={styles.iconWrapper}>
          <Icon
            role="microphone"
            className={`${styles.iconItem} ${!isVoiceActive ? styles.visible : ''}`}
          />
          <Icon
            role="recording"
            className={`${styles.iconItem} ${isVoiceActive ? styles.visible : ''}`}
          />
        </div>
      </button>
    </div>
  );
}