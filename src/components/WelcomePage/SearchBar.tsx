/** Задания:
 * 1. Изменить нейминг: сделать по БЭМ, поменять нейминг в стилях, убрать модули, подключить в style;
 * 2. Использовать variables, то есть цвета-коды в стилях;
 * 3. Сверстать кнопку выхода на первую страницу
 * 
 */

'use client';

import { useState } from 'react';
import styles from '../../../src/styles/components/searchBar.module.scss';
import { Icon } from '../../../src/components/Сommon/Icon';
import { CustomInput } from '../Сommon/CustomInput';
import { VoiceRecordButton } from './VoiceRecordButton';
import Link from 'next/link';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleVoice = () => {
    setIsVoiceActive((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <CustomInput
        inputType="search"
        placeholder="Введите ваш запрос"
        inputValue={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter'}
        disabled={isVoiceActive}
        id='query'
        required={false}
      />
      <Link href='/3rdpage' type="button" className={styles.btnSearch} aria-label="Выполнить поиск">
        <Icon role="search" className='search-icon' />
      </Link>
      <VoiceRecordButton voiceFn={handleVoice} voiceActive={isVoiceActive} />
    </div>
  );
}