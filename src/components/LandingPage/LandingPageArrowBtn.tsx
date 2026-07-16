'use client';

import { Icon } from '../Common/Icon';

interface LandingPageArrowBtnProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function LandingPageArrowBtn({
  isOpen,
  onToggle,
}: LandingPageArrowBtnProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="scenary__item-btn"
      aria-label={isOpen ? 'Свернуть детали' : 'Развернуть детали'}
      style={{
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon
        role="arrow"
        className={`scenary__details-symbol ${isOpen ? 'scenary__details-symbol--active' : ''
          }`}
        aria-hidden="true"
      />
    </button>
  );
}