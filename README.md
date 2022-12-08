# Vite Start Project

Have seen people struggle with [eslint](https://eslint.org/) and [prettier](https://prettier.io/) setup, so I create a start project by vite.

Everything is ready to go, just download and start developing 🎉

## Features

All this featrues are out-of-the-box, no need to other setup.

- Vite
- React
- TypeScript
- ESLint (airbnb-config)
- Prettier
- Environment Variable
- Absolute path & Alias path

## Structure

```
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.demo (environment for demo build)
├── .env.dev (environment for dev build)
├── .env.production (environment for production build)
├── .eslintrc.json (all eslint setup)
├── .gitignore (git)
├── .prettierrc (prettier rules)
├── tsconfig.json (TypeScript setup)
├── tsconfig.node.json (TypeScript config for vite)
└── vite.config.ts (all config for vite)
```

## Requirement

- [VS-Code](https://code.visualstudio.com/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (Extension)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (Extension)

For someone people who firs-time use prettier, you may need add this setting to your vscode:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode", // choose prettier by default formatter
  "editor.formatOnSave": true // auto format when save
}
```

## Installation

1\. clone this reposiory to your computer.

```
git clone
```

2\. install the dependencies

```
npm install
```

3\. start the dev server

```
npm run start
```

## Build

I create 3 different environment for building:

- `npm run demo` build for demo environment
- `npm run dev` build for dev environment
- `npm run build` build for production environment

if you don't need them, just use `npm run build` for production bulding.

## Remark

I also write an article about how to set up all this config step-by-step, if you are interesting about that, check out the links of blow:

https://jubeatt.github.io/2022/12/01/vite-start-project/

(I'm sorry but it writing in Chinese 😭)
