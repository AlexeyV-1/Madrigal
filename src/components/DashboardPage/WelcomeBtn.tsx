interface DashboardWelcomeBtnProps {
    text: string;
}

export default function WelcomeBtn({
    text,
    // onClick,
}: DashboardWelcomeBtnProps) {
    return (
        <button
            className="welcome__item-btn"
            // onClick={onClick}
            type="button"
            aria-label={text}
        >
            {text}
        </button>
    );
}