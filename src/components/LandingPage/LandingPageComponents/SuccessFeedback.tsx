import { FC } from "react"
import { Icon } from "@/components/Common/Icon"

interface SuccessFeedbackProps {
    state: boolean
}

export const SuccessFeedback: FC<SuccessFeedbackProps> = ({ state }) => {
    return (
        <div className={ state ? "feedback-card__success feedback-card__success--active" : "feedback-card__success"}>
            <div className='feedback-card__success-wrapper'>
                <div className='feedback-card__tick'>
                    <Icon role="sent-tick" className="feedback-card__tick-icon"></Icon>
                </div>
                <span>Ваша заявка отправлена!</span>
            </div>
        </div>
    )
}