import { Icon } from '../Common/Icon';
import { SearchBar } from '../DashboardPage/SearchBar';

interface DashboardActionsProps {
    onToggleChart: () => void;
    onTogglePageAnimation: () => void;
    isChart: boolean
}

export default function DashboardActions({ onToggleChart, onTogglePageAnimation, isChart }: DashboardActionsProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        onToggleChart()
    }

    return (
        <div className="welcome__actions">
            <div className="welcome__actions-group">
                { /*
                <button
                    className="welcome__add-btn"
                    type="button"
                    aria-label="Добавить"
                    onClick={() => alert('Данная функция будет реализована позже!')}
                >
                    <Icon className="welcome__add-icon welcome__icon" role="add" />
                </button>
                */ }
                <>
                    <input
                        id="attachment-files"
                        className="welcome__attachment-files"
                        type="file"
                        hidden
                        onChange={handleFileChange}
                    />
                    <label htmlFor="attachment-files" className="welcome__attachment-btn">
                        <Icon className="welcome__attachment-icon welcome__icon" role="attachment" />
                    </label>
                </>
            </div>
            <SearchBar 
                onTogglePageAnimation={onTogglePageAnimation}
                isChart={isChart}
            />
        </div>
    );
}