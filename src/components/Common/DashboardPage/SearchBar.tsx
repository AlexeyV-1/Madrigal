'use client';

import { useState } from 'react';
import { Icon } from '../Icon';


import { ExitButton } from '../ExitButton';
import { CustomInput } from '../CustomInput';
import { VoiceRecordButton } from './VoiceRecordButton';
import Link from 'next/link';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleVoice = () => {
    setIsVoiceActive((prev) => !prev);
  };

  // МОЖНО EXITBUTTON СМЁРДЖИТЬ С LINK='/3rdpage'

  return (
    <div className="search-bar">
      {/* <ExitButton /> */}

      <CustomInput
        inputType="text"
        placeholder="Задайте вопрос"
        inputValue={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter'}
        disabled={isVoiceActive}
        id="query"
        required={false}
      />
      <Icon className="welcome__icon" role="microphone" />

      {/* <Link
        href="/3rdpage"
        className="search-bar__btn-search"
        aria-label="Выполнить поиск"
      >
        <Icon role="search" className="search-bar__icon" />
      </Link> */}

      {/* <VoiceRecordButton
        voiceFn={handleVoice}
        voiceActive={isVoiceActive}
        className="search-bar__voice-btn"
      /> */}
    </div>
  );
}