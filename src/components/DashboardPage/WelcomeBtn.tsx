interface DashboardWelcomeBtnProps {
    text: string;
}

export default function WelcomeBtn({
    text,
}: DashboardWelcomeBtnProps) {
    return (
        <button
            className="welcome__item-btn"
            type="button"
            aria-label={text}
            onClick={() => alert("Данная функция будет реализована позже!")}
        >
            {text}
        </button>
    );
}