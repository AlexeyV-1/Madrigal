import { Icon } from "../../Icon";
import WelcomeBtn from "../../../DashboardPage/WelcomeBtn";
import { ImageAsset } from "../../Image";

export default function DashboardChart() {
    return (
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
                <div className="chart__group-wrapper">
                    <Icon
                        className="chart__group-icon"
                        role="delete"
                        aria-label="Удалить изображение"
                    />
                </div>
            </div>
            <div className="welcome__quick-list">
                <WelcomeBtn text='Построить динамику сумм по месяцам' />
                <WelcomeBtn text='Показать топ-5 поставщиков на диаграмме' />
                <WelcomeBtn text='Сравнить плановые и фактические расходы' />
            </div>
        </section>
    )
}