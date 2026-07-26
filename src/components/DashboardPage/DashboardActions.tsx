import { Icon } from '../Common/Icon';
import { SearchBar } from '../DashboardPage/SearchBar';

interface DashboardActionsProps {
    onToggleChart: () => void;
}

export default function DashboardActions({ onToggleChart }: DashboardActionsProps) {
    return (
        <div className="welcome__actions">
            <div className="welcome__actions-group">
                <button
                    className="welcome__add-btn"
                    type="button"
                    aria-label="Добавить"
                >
                    <Icon className="welcome__add-icon welcome__icon" role="add" />
                </button>

                <button
                    className="welcome__attachment-btn"
                    type="button"
                    aria-label="Показать/скрыть график"
                    onClick={onToggleChart}
                >
                    <Icon className="welcome__attachment-icon welcome__icon" role="attachment" />
                </button>
            </div>
            <SearchBar />
        </div>
    );
}