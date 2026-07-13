'use client';

import Link from 'next/link';
import { Icon } from '../Common/Icon';

interface ExitButtonProps {
  className?: string;
  href?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  noBaseStyle?: boolean;
}

export const ExitButton = ({
  className = '',
  href = '/',
  ariaLabel = 'Вернуться на главную',
  children,
  noBaseStyle = false,
}: ExitButtonProps) => {
  const hasText = !!children;
  const baseClass = noBaseStyle ? '' : 'search-bar__btn-home';

  return (
    <Link
      href={href}
      className={`${baseClass} ${className}`.trim()}
      aria-label={hasText ? undefined : ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      {hasText ? (
        <>
          {children}
          <Icon role="home" className="search-bar__icon" />
        </>
      ) : (
        <Icon role="home" className="search-bar__icon" />
      )}
    </Link>
  );
};