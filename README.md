This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Архитектура проекта

Проект организован по методологии **Feature-Sliced Design (FSD)**.

### Структура слоев

```
src/
├── app/          # Инициализация приложения (Next.js App Router)
├── pages/        # Страницы приложения (композиция виджетов)
├── widgets/      # Крупные самостоятельные блоки интерфейса
├── features/     # Функциональные возможности
├── entities/     # Бизнес-сущности
└── shared/       # Переиспользуемый код
    ├── ui/       # UI компоненты
    ├── lib/      # Утилиты
    ├── api/      # API клиенты
    ├── config/   # Конфигурация
    └── assets/   # Статические ресурсы
```

### Правила импорта

Слои могут импортировать только из нижележащих слоев:

```
app → pages → widgets → features → entities → shared
```

Подробнее о структуре FSD: [src/shared/config/fsd-structure.md](src/shared/config/fsd-structure.md)

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

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
