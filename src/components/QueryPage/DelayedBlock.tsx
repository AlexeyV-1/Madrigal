import clsx from 'clsx';

interface DelayedBlockProps {
    children: React.ReactNode;
    delayMs: number;
    className?: string
}

export const DelayedBlock = ({ children, delayMs, className }: DelayedBlockProps) => {
    return (
        <div
            className={clsx('statistics__block', className)}
            style={{ animationDelay: `${delayMs / 1000}s` }}
        >
            {children}
        </div>
    );
};