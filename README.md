# MADRIGAL

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---------------------------
My Readme beta
# Madrigal — Веб‑инструмент для digital‑агентства

Интерактивный веб‑инструмент (калькулятор стоимости и панель аналитики) для менеджера digital‑агентства. Платформа автоматизирует рутинные расчёты и визуализацию данных, ускоряя подготовку отчётов.

## 🚀 Что решает проект

- Убирает ручной расчёт стоимости проектов и построение графиков в Excel.
- Даёт менеджеру быстрый способ собрать отчёт по периодам, регионам и суммам.
- Показывает статистику в удобном виде (3 колонки + график) с плавными анимациями появления.

---

## 🧩 Функционал

- **Калькулятор стоимости** — расчёт на основе выбранных параметров.
- **Панель статистики** — отображение данных по периодам/регионам/суммам.
- **Интерактивные фильтры** — три зависимых селекта (период, сумма, регион) с кастомной анимацией раскрытия.
- **Условный рендеринг** — тяжёлые блоки (например, график) подгружаются только по взаимодействию.
- **Адаптивная верстка** — корректное отображение на мобильных и десктопе (в т.ч. проект `first-mobile`).

---

## 🛠 Стек технологий

- Next.js (App Router)
- React, TypeScript
- SCSS (переменные, миксины, адаптивные брейкпоинты)
- TailwindCSS (частично)
- GitHub

---

## 💡 Ключевые инженерные решения

Эти пункты прямо соответствуют тому, что ты указывал в резюме — рекрутер сможет быстро сопоставить описание и код.

### Next.js и гидратация
- Разделение на серверные и клиентские компоненты (`'use client'`).
- Устранены ошибки гидратации при инициализации сторонних библиотек и манипуляциях с DOM.

### Кастомизация `choices.js`
- Реализована кастомная анимация раскрытия списка через CSS (`max-height` + `opacity`).
- Пустые/заглушечные опции визуально отображаются, но программно отключены для выбора (`pointer-events: none`, `opacity: 0.6`).
- DOM‑структура сохранена, чтобы не ломать анимации.

### TypeScript и работа со сторонними библиотеками
- Использованы кастомные типы и приведение типов (`as any`) для безопасного доступа к внутренним свойствам библиотеки без потери типобезопасности остальной части кода.
- Компоненты спроектированы с чётким разделением логики и UI.

### Адаптивная верстка и UI
- Адаптивная сетка на CSS Grid/Flex для трёх колонок статистики.
- Кастомные формы: input, range slider (ползунок), кнопки — под дизайн‑макет.
- Микро‑анимации и каскадное появление блоков с разной задержкой.

---

## 📂 Структура проекта

Кратко про то, где искать самое важное:

- `src/app/` — страницы и роутинг (Next.js App Router).
- `src/components/` — переиспользуемые компоненты:
  - `Selector` — кастомные селекты на базе `choices.js`.
  - `DashboardWelcome`, `DashboardChart` — блоки дашборда.
  - `CustomInput`, `AnimatedSection` — кастомные формы и анимации.
- `src/styles/` — SCSS‑файлы, глобальные стили и миксины.
- `tailwind.config.ts` — конфигурация Tailwind (если используется).

---

## ▶️ Как запустить локально

1. Клонируй репозиторий:
   ```bash
   git clone https://github.com/AlexeyV-1/Madrigal.git
   cd Madrigal
