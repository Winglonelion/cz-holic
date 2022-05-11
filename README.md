# CZ_HOLIC


## Simple implement of Binance 24h ticker dashboard using Binance Open API

> In this project, i wanna do many things. But time is limited. So, just core features be implemented.

You can also visit my pet project for React Native one year ago, it's not really related to this project, but it's fun, using morden technologies, and well structured.
https://github.com/Winglonelion/react-native-new-era

## Core Technologies
- React Native 0.68.2
- Redux and Redux saga as state management system
- Axios at http client

## Conventions
- Code lint and auto format by Eslint and Prettier
- Commit lint using husky and commit-lint (not yet implemented)
- Base on my Uncle Bob "The Clean Code" spirit.

## Project Structure
```
src
├── App
│   ├── App.tsx
│   └── AppProvider.tsx
├── api
│   └── ticker
│       ├── ticker.api.ts
│       └── ticker.data.types.ts
├── components
│   ├── TickerItem
│   │   ├── TickerItem.tsx
│   │   └── index.tsx
│   └── Typo
│       ├── TextContent.tsx
│       └── TextHeader.tsx
├── constants
│   └── fetch.status.types.ts
├── data
│   ├── ticker
│   │   ├── ticker.actions.name.ts
│   │   ├── ticker.actions.ts
│   │   ├── ticker.reducer.ts
│   │   ├── ticker.saga.ts
│   │   ├── ticker.selectors.ts
│   │   └── ticker.types.ts
│   ├── redux.root.reducer.ts
│   ├── redux.store.ts
│   └── root.saga.ts
├── screens
│   └── TickerScreen
│       ├── components
│       ├── TickerScreen.logic.ts
│       ├── TickerScreen.view.tsx
│       └── index.tsx
├── theme
│   └── CommonStyles.ts
└── utils

14 directories, 22 files
```


## Setup Environment
- JDK 11 or higher
- Xcode 11 or higher
- Yarn 1 or higher
- Node 14 or Higher
- You can follow the [React native Environment setup](https://reactnative.dev/docs/environment-setup) to have more details


## Get Starts


> Before start please ensure your environment ready for build and develop react native Application.
>


### In Your project root folder, open terminal and get start!

1. Install Dependencies
```bash
# install dependencies
yarn

# install cocoapods
cd ios
pod install
```

2. Start your Application
```bash
# start dev server
yarn start

# run ios version in Debug mode
yarn ios

# run android version in Debug mode
yarn android
```
