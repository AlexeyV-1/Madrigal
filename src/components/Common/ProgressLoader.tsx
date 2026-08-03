'use client'

import { useEffect, useRef, useState } from 'react'

interface ProgressLoaderProps {
  target?: number
  duration?: number
  size?: number
  strokeWidth?: number
  color?: string
  trackColor?: string
  onComplete?: () => void
  className?: string
}

export function ProgressLoader({
  target = 100,
  duration = 2600,
  size = 126,
  strokeWidth = 15,
  color = '#e8622c',
  trackColor = '#2a1410',
  onComplete,
  className,
}: ProgressLoaderProps) {
  const circleRef = useRef<SVGCircleElement>(null)
  const [displayValue, setDisplayValue] = useState(0)

  const radius = size / 2 - strokeWidth / 2 - 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    let start: number | null = null
    let frameId: number

    const ease = (t: number) => 1 - Math.pow(1 - t, 3)

    const frame = (ts: number) => {
      if (start === null) start = ts
      const elapsed = ts - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = ease(progress)
      const value = Math.round(eased * target)
      const offset = circumference - (eased * target) / 100 * circumference

      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = String(offset)
      }
      setDisplayValue(value)

      if (progress < 1) {
        frameId = requestAnimationFrame(frame)
      } else {
        onComplete?.()
      }
    }

    frameId = requestAnimationFrame(frame)

    return () => cancelAnimationFrame(frameId)
  }, [target, duration, circumference, onComplete])

  return (
    <div
      className={`progress-loader ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className='progress-loader__svg'
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth / 3}
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className='progress-loader__progress'
        />
      </svg>
      <div className='progress-loader__label' style={{ color }}>
        {displayValue}%
      </div>
    </div>
  )
}