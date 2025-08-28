# React PWA App

A Progressive Web App built with React, TypeScript, and Vite.

## Features
- ✅ PWA Configuration with Vite Plugin PWA
- ✅ Service Worker Registration
- ✅ Web App Manifest
- ✅ Installable as a standalone app
- ✅ Offline capability

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## PWA Features

- **Installable**: The app can be installed as a standalone application on desktop and mobile devices
- **Offline Support**: Works offline using service worker caching
- **App-like Experience**: Full-screen experience with custom splash screen
- **Update Notifications**: Automatic updates when new versions are available

## Testing PWA Features

1. **Install Prompt**: Look for the install prompt in the browser address bar
2. **Offline Mode**: After loading the app, disconnect from the internet and refresh the page
3. **Mobile Testing**: Test on mobile devices to see the "Add to Home Screen" prompt

## Project Structure

```
react-pwa-app/
├── public/
│   ├── pwa-192x192.png (PWA icon)
│   ├── pwa-512x512.png (PWA icon)
│   └── vite.svg
├── src/
│   ├── main.tsx (Service worker registration)
│   ├── App.tsx (Main app component)
│   └── ...
├── vite.config.ts (PWA plugin configuration)
├── manifest.json (PWA manifest)
└── package.json
```

## Customization

- Update the manifest.json file to change app name, colors, and icons
- Modify vite.config.ts to adjust PWA settings
- Replace the PWA icons in the public folder with your own
