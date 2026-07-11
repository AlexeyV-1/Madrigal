'use client';

// import { FC } from 'react';
import Link from 'next/link';
import { Icon } from '../Common/Icon';

// interface ExitButtonProps {
  // className?: string;
// }

export const ExitButton = () => {
  return (
    <Link
      href="/"
      className='search-bar__btn-home' // ${className || ''}`}
      aria-label="Вернуться на главную"
    >
      <Icon role="home" className="search-bar__icon" />
    </Link>
  );
};