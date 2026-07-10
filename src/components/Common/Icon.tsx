import { FC } from 'react';

interface IconProps {
    role: 'microphone' | 'recording' | 'search' | 'home',
    className: string
}

export const Icon: FC<IconProps & React.SVGProps<SVGSVGElement>> = ({ role, className }) => {
    switch (role) {
        case 'microphone':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
                    <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
                    />
                    <line x1="12" y1="18" y2="22" x2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    />
                    <line x1="8" y1="22" y2="22" x2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    />
                </svg>
            );

        case 'recording':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    className={className}
                >
                    <circle cx="12" cy="12" r="8" fill="#e11d48" />
                </svg>
            );

        case 'search':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
    }
};