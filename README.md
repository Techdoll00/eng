# Doodle English — Clarity Upgrade

A mobile-first, editorial English upgrade tool built for Vercel deployment. Focuses on the Feynman method: thinking clarity before language accuracy.

## Features
- **Instant Upgrade**: Input one thought, get Clear, Business, and IELTS versions.
- **Handy Patterns**: Reusable expression structures to organize thoughts.
- **Feynman Challenge**: Simple prompts to re-say your idea to ensure understanding.
- **Local History**: All interactions are saved locally to your device.
- **PWA Ready**: Installable to iOS/Android home screens as a standalone app.
- **Voice Support**: Integrated speech-to-text and text-to-speech.

## Tech Stack
- React (Vite)
- TypeScript
- Tailwind CSS
- Gemini AI (Optional, falls back to Mock)
- Web Speech API
- Service Workers (for Offline caching)

## Packaging as Android APK (Optional)

The app is compatible with Android **Trusted Web Activity (TWA)**, allowing it to be published on the Google Play Store or installed as an APK.

### Requirements:
1. App must be served over HTTPS (handled by Vercel).
2. App must have a valid `manifest.json`.
3. App must achieve a good Lighthouse PWA score.

### Recommended Tool: **Bubblewrap**
[Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) is the official Google tool for turning PWAs into Android App Bundles.

### Steps:
1. **Install Bubblewrap**: `npm i -g @bubblewrap/cli`
2. **Initialize**: `bubblewrap init --manifest https://your-app-url.vercel.app/manifest.json`
3. **Build**: `bubblewrap build`
4. **Sign**: Use the generated keystore to sign your APK/AAB.
5. **Install**: Transfer the resulting `.apk` to your Android device to test.

## Troubleshooting
- **Blank Screen**: Ensure `index.html` has `<div id="root"></div>` and points to `./index.tsx`. 
- **Not Installable**: Ensure the Service Worker (`sw.js`) is correctly registered and serving the manifest.
- **Voice Input**: Ensure you grant microphone permissions when prompted.
