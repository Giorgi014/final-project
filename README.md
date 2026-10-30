# Stygar

Stygar — თანამედროვე, რესპონსიული დიზაინის სტუდიის ვებგვერდი, რომელიც შექმნილია React, TypeScript და Vite ტექნოლოგიებზე. პროექტი მოიცავს სტუდიის მთავარი გვერდის, მომსახურებების, პორტფოლიოს, პროექტების დეტალური აღწერის, ავტორიზაციის, კონტაქტისა და 404 გვერდების ინტერფეისს.

## ძირითადი შესაძლებლობები

- მთავარი გვერდი სტუდიის სერვისების, პროექტების, გუნდისა და მიღწევების ჩვენებით
- მომსახურებების, პორტფოლიოს, „ჩვენ შესახებ“ და პროექტის დეტალური გვერდები
- შესვლისა და რეგისტრაციის ფორმები React Hook Form-ისა და Zod-ის ვალიდაციით
- საკონტაქტო ფორმა ვალიდაციითა და ბრაუზერის მხარდაჭერით
- GSAP-ზე დაფუძნებული scroll- და entrance-ანიმაციები
- Lazy loading გვერდებისთვის და საერთო loading კომპონენტი
- Tailwind CSS 4-ის utility კლასები და პროექტის საკუთარ დიზაინ-სისტემა
- რესპონსიული ნავიგაცია, გვერდითი მენიუ და 404 გვერდი
- SPA redirect კონფიგურაცია Vercel-ისთვის

## გამოყენებული ტექნოლოგიები

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS 4
- GSAP და `@gsap/react`
- React Hook Form
- Zod და `@hookform/resolvers`
- React Icons
- ESLint
- Biome

## სისტემური მოთხოვნები

- Node.js 20.19+ ან 22.12+
- npm

## პროექტის ჩართვა

1. გადააკოპირეთ პროექტი:

```bash
git clone <repository-url>
cd final-project
```

2. დააინსტალირეთ დამოკიდებულებები:

```bash
npm install
```

3. გაუშვით development server:

```bash
npm run dev
```

4. გახსენით ტერმინალში გამოჩენილი ლოკალური მისამართი, ჩვეულებრივ `http://localhost:5173`.

## ხელმისაწვდომი ბრძანებები

| ბრძანება          | აღწერა                                                  |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | development server-ის გაშვება                           |
| `npm run build`   | TypeScript-ის შემოწმებას და production build-ის შექმნას |
| `npm run lint`    | ESLint-ის გაშვებას მთელ პროექტზე                        |
| `npm run preview` | დამზადებული production build-ის ლოკალურად preview-ს     |

Production build ქმნის `dist/` საქაღალდეს.

## გვერდები და route-ები

| Route                 | გვერდი                   |
| --------------------- | ------------------------ |
| `/`                   | მთავარი გვერდი           |
| `/services`           | მომსახურებები            |
| `/portfolio`          | პორტფოლიო                |
| `/about`              | სტუდიის შესახებ          |
| `/contact`            | კონტაქტი                 |
| `/project`            | პროექტის დეტალური გვერდი |
| `/sign-in`            | შესვლა                   |
| `/sign-up`            | რეგისტრაცია              |
| დანარჩენი მისამართები | 404 გვერდი               |

ყველა ძირითად გვერდს Header, Footer და scroll-to-top ფუნქციონალი გააჩნია. Sign-in, Sign-up და შეცდომის გვერდები საკუთარი layout-ს იყენებენ.

## პროექტის სტრუქტურა

```text
src/
├── App.tsx                 # საერთო layout და nested routes
├── main.tsx                # React-ის გაშვება და router-ის კონფიგურაცია
├── index.css               # Tailwind და გლობალური სტილები
├── assets/                 # SVG, PNG და local font ფაილები
├── components/
│   ├── about/              # About გვერდის section-ები
│   ├── animation/          # GSAP reveal და animation defaults
│   ├── auth/               # Sign-in და sign-up ფორმები
│   ├── contact/            # კონტაქტის section და ფორმა
│   ├── home/               # მთავარი გვერდის კომპონენტები
│   ├── layout/             # Header, navigation, footer, scroll-to-top
│   ├── lib/                # GSAP-ის საერთო კონფიგურაცია
│   ├── portfolio/          # პორტფოლიოს კომპონენტები
│   ├── project/            # პროექტის დეტალური section-ები
│   ├── services/           # Services გვერდის section-ები
│   ├── shared/             # მრავალ გვერდზე გამოყენებული section-ები
│   └── ui/                 # ბაზისურ UI ელემენტები
├── data/                   # გვერდების სტატიკური მონაცემები
├── hooks/                  # Carousel და reveal custom hooks
├── layouts/               # Auth/error გვერდების layout
├── pages/                  # Route-level გვერდები და lazy imports
├── schema/                 # React Hook Form-ის Zod schema-ები
└── types/                  # საერთო TypeScript ტიპები
```

## Alias და მოდულების იმპორტი

`vite.config.ts`-ში კონფიგურირებულია `@/` alias, რომელიც `src/` საქაღალდეს მიუთითებს.

```ts
import { SignIn } from "@/components/auth";
import { PROJECTS } from "@/data/home";
```

Feature საქაღალდეებში ხშირად დამატებულია barrel-ფაილები (`index.ts`), რომ კომპონენტები ერთიანი import-ით იყოს ხელმისაწვდომი:

```ts
import { HeroHome, ProjectsSection } from "@/components";
```

## ფორმები და ვალიდაცია

- Contact ფორმა ამოწმებს სახელს, ელფოსტას და შეტყობინებას.
- Sign-in ფორმა ამოწმებს ვალიდურ ელფოსტასა და პაროლს.
- Sign-up-ი ასევე პაროლის განმეორებასაც ადარებს.
- პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, მთავრულ, ნუსხულ და ციფრს.

ამჟამად frontend ფორმების submit handler-ები მონაცემებს ბრაუზერის console-ში გამოაქვს. Backend API, მონაცემთა ბაზა ან სერვერის მხარის ავტორიზაცია პროექტში არ არის მიერთებული.

## ანიმაციები

GSAP-ის ScrollTrigger-ზე დაფუძნებული ანიმაციები პროექტის საერთო კონფიგურაცია `/src/components/lib/gsap.ts`-შია. Reveal helper მდებარეობს `/src/components/animation/`.

მობილურ და desktop ზომებზე layout-ისა და ანიმაციების მდგომარეობა კომპონენტებში დამოუკიდებლად კონტროლდება.

## Build და deployment

Production build-ის შესაქმნელად გაუშვით:

```bash
npm run build
npm run preview
```

`vercel.json`-ში მითითებულია SPA fallback, რომელიც ყველა route-ს `/index.html`-ზე გადაამისამართებს. ეს აუცილებელია React Router-ის client-side navigation-ისთვის production გარემოში.

## კოდის ხარისხი

კოდის ფორმატირებისა და lint წესებისთვის გამოიყენება ESLint-ისა და Biome-ის კონფიგურაციები:

- `eslint.config.js`
- `biome.json`

შეცვლებამდე რეკომენდებულია:

```bash
npm run lint
npm run build
```
