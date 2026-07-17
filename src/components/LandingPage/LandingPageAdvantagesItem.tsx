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

export default function LandingPageAdvantagesItem({
    title,
    text,
    iconRole,
}: LandingPageAdvantagesItemProps) {
    return (
        <div className="advantages__card">
            <div className="advantages__card-wrapper">
                <div className="advantages__card-head">
                    <div className="advantages__card-icon-wrapper">
                        <Icon role={iconRole} aria-label="Тематическое изображение" className="advantages__card-icon" />
                    </div>
                    <div className="advantages__card-title">{title}</div>
                </div>
                <p className="advantages__card-text">{text}</p>
            </div>
        </div>
    );
}