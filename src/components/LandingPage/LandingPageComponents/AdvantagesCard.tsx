import { Icon } from '@/components/Common/Icon';

type ValidIconRole =
    | 'pie'
    | 'time'
    | 'static'
    | 'lock';

interface LandingPageAdvantagesItemProps {
    title: string;
    text: string;
    iconRole: ValidIconRole;
}

export default function AdvantagesCard({
    title,
    text,
    iconRole,
}: LandingPageAdvantagesItemProps) {
    return (
        <div className="advantages-card">
            <div className="advantages-card__wrapper">
                <div className="advantages-card__head">
                    <div className="advantages-card__icon-wrapper">
                        <Icon role={iconRole} aria-label="Тематическое изображение" className="advantages__card__icon" />
                    </div>
                    <div className="advantages-card__title">{title}</div>
                </div>
                <p className="advantages-card__text">{text}</p>
            </div>
        </div>
    );
}