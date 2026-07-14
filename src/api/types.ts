import z from "zod"

export const LoginScheme = z.object({
    email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
    password: z.string().min(1, 'Пароль обязателен'),
})

export type Login = z.infer<typeof LoginScheme>

export const ApplicationScheme = z.object({
    firstAndLastNames: z.string().min(1, 'Введите имя и фамилию').transform((val) => val.trim().split(/\s+/)).refine((parts) => parts.length >= 2, {
        message: 'Введите имя и фамилию через пробел',
    }),
    nameOrganization: z.string().min(1, 'Введите название организации'),
    phoneNumber: z.string().min(1, 'Номер телефона обязателен').regex(/^\+?[1-9]\d{7,14}$/, 'Некорректный номер телефона'),
    agreement: z.literal(true, {
        errorMap: () => ({ message: 'Необходимо согласие с условиями' }),
    })
})

export type Application = z.infer<typeof ApplicationScheme>