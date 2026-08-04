import { Icon } from "../Common/Icon"

interface CopyBtnProps {
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CopyBtn({ handleFileChange }: CopyBtnProps) {
    return (
        <div className="statistics__copy-wrapper">
            <div className="statistics__copy-icons">
                <button
                    className="statistics__copy-btn"
                    onClick={() => alert("Данная функция будет реализована позже!")}
                >
                    <Icon className="statistics__copy-icon" role="copy-1" />
                </button>
                <button
                    className="statistics__copy-btn"
                    onClick={() => alert("Данная функция будет реализована позже!")}
                >
                    <Icon className="statistics__copy-icon" role="copy-2" />
                </button>
            </div>
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
                <label htmlFor="attachment-files" className="welcome__attachment-btn">
                    <Icon className="welcome__attachment-icon welcome__icon" role="add" />
                </label>
            </>
            { /*
            <div className="statistics__copy-background">
                <Icon className="statistics__copy-arrow" role="arrow" />
            </div>
                  */ }
        </div>
    )
}