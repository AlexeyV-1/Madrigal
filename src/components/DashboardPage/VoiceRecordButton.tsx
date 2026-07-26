'use client';

import { FC } from 'react';
import { Icon } from '../Common/Icon';

interface VoiceRecordButtonProps {
  voiceFn: () => void;
  voiceActive: boolean;
  className?: string
}

export const VoiceRecordButton: FC<VoiceRecordButtonProps> = ({ voiceFn, voiceActive }) => {
  return (
    <button
      type="button"
      onClick={voiceFn}
      className={`search-bar__btn-voice ${voiceActive ? 'active' : ''}`}
      aria-label={voiceActive ? 'Остановить голосовой ввод' : 'Голосовой запрос'}
    >
      <div className="search-bar__icon-wrapper">
        {voiceActive ? (
          <Icon
            role="recording"
            className="search-bar__icon-item search-bar--visible"
          />
        ) : (
          <Icon
            role="microphone"
            className="search-bar__icon-item search-bar--visible"
          />
        )}
      </div>
    </button>
  );
};