# LeetCode Mobile App (Expo)

A starter mobile app built with React Native + Expo.

## Prerequisites

-   Node.js 18+
-   npm 9+
-   Optional: Expo Go app on your phone
-   Optional (for native deployment builds): Expo account + EAS CLI

## 1) Install dependencies

```bash
cd mobile-app
npm install
```

## 2) Run locally

```bash
npm run start
```

This opens Expo Dev Tools. From there you can run on:

-   **Physical device**: scan the QR code in Expo Go
-   **Android emulator**: press `a`
-   **iOS simulator (macOS only)**: press `i`
-   **Web**: run `npm run web`

## 3) Production deployment options

### Option A: Build installable apps (recommended)

This creates distributable binaries:

-   Android: `.aab` / `.apk`
-   iOS: `.ipa`

#### Steps

1. Install EAS CLI globally:

```bash
npm install -g eas-cli
```

2. Login to Expo:

```bash
eas login
```

3. Configure the project (first time only):

```bash
eas build:configure
```

4. Build binaries:

```bash
# Android
npm run build:android

# iOS
npm run build:ios
```

5. Submit to stores (optional):

```bash
# Android Play Store
npm run submit:android

# iOS App Store
npm run submit:ios
```

### Option B: Publish OTA updates

If you want fast JavaScript/content updates without full store rebuilds:

```bash
npm run update:prod
```

## Useful scripts

-   `npm run start` - start Expo dev server
-   `npm run android` - launch Android workflow
-   `npm run ios` - launch iOS workflow
-   `npm run web` - launch web preview
-   `npm run build:android` - EAS Android production build
-   `npm run build:ios` - EAS iOS production build
-   `npm run submit:android` - submit Android build to Play Store
-   `npm run submit:ios` - submit iOS build to App Store
-   `npm run update:prod` - publish OTA update to `production` channel

## Included starter UI

-   Progress snapshot card
-   Daily challenge section
