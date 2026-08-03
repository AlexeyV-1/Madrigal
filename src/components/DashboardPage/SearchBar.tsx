'use client';

import { useState } from 'react';
import { Icon } from '../Common/Icon';
import { CustomInput } from '../Common/CustomInput';
import { useRouter } from "next/navigation";

interface SearchBarProps {
  onTogglePageAnimation?: () => void;
}

export function SearchBar({ onTogglePageAnimation }: SearchBarProps) {
  const [query, setQuery] = useState('');
  // const [isVoiceActive, setIsVoiceActive] = useState(false);
  const router = useRouter()

  // const handleVoice = () => {
  //   setIsVoiceActive((prev) => !prev);
  // };

  const hasText = query.trim().length > 0

  const handleSubmit = (query: string) => {
    if (query == 'Сделай мне график по самым крупным поставщикам и распиши, что там происходит') {
      onTogglePageAnimation?.()
      setTimeout(() => {
        router.push('/querypage')
      }, 1000)
    }
  }

  return (
    <form className="welcome__search-btn" onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(query)
    }}>
      <CustomInput
        inputType="text"
        placeholder="Задайте вопрос"
        inputValue={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter'}
        // disabled={isVoiceActive}
        id="query"
        required={false}
      />
      {!hasText && (
        <button className="welcome__search--microphone"
        type='button'>
          <Icon
            className="welcome__search-icon"
            role="microphone"
            aria-label="Голосовой ввод"
          />
        </button>
      )}
      {hasText && (
        <button className="welcome__search--send"
        type='submit'>
          <Icon
            className="welcome__search-icon--send"
            role="send"
            aria-label="Отправить запрос"
          />
        </button>
      )}
    </form>
  );
}


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

// import { ExitButton } from '../ExitButton';
// import { VoiceRecordButton } from './VoiceRecordButton';
// import Link from 'next/link';