import { FC } from "react"

interface SuccessFeedbackProps {
    state: boolean
}

export const SuccessFeedback: FC<SuccessFeedbackProps> = ({ state }) => {
    return (
        <div className={ state ? "feedback-card__success feedback-card__success--active" : "feedback-card__success"}>
            Ваша заявка успешно отправлена!
        </div>
    )
}