'use client';

import { useState } from 'react';
import LandingPageArrowBtn from './LandingPageArrowBtn';
import { Icon } from '../../Common/Icon';

interface LandingPageScenaryItemProps {
    summary: string;
    title: string;
    text: string;
}

export default function ScenaryCard({
    summary,
    title,
    text,
}: LandingPageScenaryItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    const handleArrowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggle();
    };

    return (
        <div
            className={`scenary-card ${isOpen ? 'scenary-card--active' : ''}`}
            onClick={toggle}
            role="button"
            aria-expanded={isOpen}
            aria-controls="scenary-details"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle();
                }
            }}
            style={{ cursor: 'pointer' }}
        >
            <div className="scenary-card__wrapper">
                <p className="scenary-card__text">{summary}</p>
                <div className="scenary-card__decorative-btn">
                    <LandingPageArrowBtn
                        isOpen={isOpen}
                        onToggle={() => handleArrowClick}
                    />
                </div>
            </div>
            <div id="scenary-details" className="scenary-card__details">
                <div className="scenary-card__inner">
                    <h3 className="scenary-card__title">{title}</h3>
                    <Icon className='scenary-card__icon scenary-card__icon--arrow' role='arrow-down-2' />
                    <p className="scenary-card__text-details">{text}</p>
                </div>
            </div>
        </div>
    );
}
