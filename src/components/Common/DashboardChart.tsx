import { Icon } from "./Icon";
import WelcomeBtn from "../DashboardPage/WelcomeBtn";
import { ImageAsset } from "./Image";

interface DashboardChartProps {
    isVisible: boolean;
    deleteFileFn: () => void
}

export default function DashboardChart({ isVisible, deleteFileFn }: DashboardChartProps) {
    const containerClass = `dashboard-animatable ${isVisible ? 'is-visible' : ''}`;

    return (
        <div className={containerClass}>
            <section className="chart">
                <Icon
                    className="chart__complete-icon"
                    role="checked"
                    aria-label="Загрузка завершена"
                />
                <div className="chart__group">
                    <ImageAsset
                        src="/IMG/Chart.png"
                        alt="График стоимости проекта"
                        width={358}
                        height={193}
                        className="chart__group-img"
                    />
                    <button 
                        className="chart__group-wrapper"
                        onClick={deleteFileFn}
                    >
                        <Icon
                            className="chart__group-icon"
                            role="delete"
                            aria-label="Удалить изображение"
                        />
                    </button>
                </div>
                <div className="welcome__quick-list">
                    <WelcomeBtn text="Построить динамику сумм по месяцам" />
                    <WelcomeBtn text="Показать топ-5 поставщиков на диаграмме" />
                    <WelcomeBtn text="Сравнить плановые и фактические расходы" />
                </div>
            </section>
        </div>
    );
}