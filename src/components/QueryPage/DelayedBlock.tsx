interface DelayedBlockProps {
    children: React.ReactNode;
    delayMs: number;
}

export const DelayedBlock = ({ children, delayMs }: DelayedBlockProps) => {
    return (
        <div
            className="statistics__block"
            style={{ animationDelay: `${delayMs / 1000}s` }}
        >
            {children}
        </div>
    );
};