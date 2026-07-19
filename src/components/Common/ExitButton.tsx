'use client'

import Link from 'next/link';
import { Icon } from './Icon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

  const router = useRouter()
  const [animationPage, setAnimationPage] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setAnimationPage(true)

    setTimeout(() => {
      router.push(href)
    }, 500)
  }

  const animationClass = animationPage ? `${className} ${className}--active` : `${className}`
  const animationBaseClass = baseClass && ( animationPage ? `${baseClass} ${baseClass}--active` : `${baseClass}` )
  const classBtn = `${animationBaseClass} ${animationClass}`.trim()

  return (
    <Link
      href={href}
      className={classBtn}
      aria-label={hasText ? undefined : ariaLabel}
      onClick={handleClick}
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