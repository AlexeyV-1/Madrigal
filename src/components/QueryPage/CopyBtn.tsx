import { Icon } from "../Common/Icon"

export default function CopyBtn() {
    return (
        <div className="statistics__copy-wrapper">
            <div className="statistics__copy-icons">
                <Icon className="statistics__copy-icon" role="copy-1" />
                <Icon className="statistics__copy-icon" role="copy-2" />
            </div>
            <div className="statistics__copy-background">
                <Icon className="statistics__copy-arrow" role="arrow" />
            </div>
        </div>
    )
}