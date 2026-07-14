'use client';

import { useState } from 'react';
import LandingPageArrowBtn from './LandingPageArrowBtn';

interface LandingPageScenaryItemProps {
    summary: string;
    title: string;
    text: string;
}

export default function LandingPageScenaryItem({
    summary,
    title,
    text,
}: LandingPageScenaryItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    //! dddddddddddd
    const handleArrowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggle();
    };

    return (
        <div
            className={`scenary__item-wrapper ${isOpen ? 'scenary__item-wrapper--active' : ''}`}
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
            <div className="scenary__item">
                <p className="scenary__item-text">{summary}</p>

                <LandingPageArrowBtn
                    isOpen={isOpen}
                    //!ffffff
                    onToggle={handleArrowClick}
                />
            </div>

            <div id="scenary-details" className="scenary__details">
                <h3 className="scenary__details-title">{title}</h3>
                <p className="scenary__details-text">{text}</p>
            </div>
        </div>
    );
}