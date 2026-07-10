import styles from '../../../src/styles/components/searchBar.module.scss';
import { Icon } from '../../../src/components/Сommon/Icon';
import { FC } from 'react';

interface VoiceRecordButtonProps {
  voiceFn: () => void
  voiceActive: boolean
}

export const VoiceRecordButton: FC<VoiceRecordButtonProps> = ({ voiceFn, voiceActive }) => {
  return (
    <button
      type="button"
      onClick={voiceFn}
      className={`${styles.btnVoice} ${voiceActive ? styles.active : ''}`}
      aria-label={voiceActive ? 'Остановить голосовой ввод' : 'Голосовой запрос'}
    >
      {voiceActive ? <Icon role='recording' className={`${styles.iconItem} ${voiceActive ? styles.visible : ''}`}
      /> : <Icon role='microphone' className={`${styles.iconItem} ${!voiceActive ? styles.visible : ''}`}
      />}
    </button>
  )
}