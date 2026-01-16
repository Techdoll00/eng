# Doodle English — Clarity Upgrade

A mobile-first, editorial English upgrade tool built for Vercel deployment. Focuses on the Feynman method: thinking clarity before language accuracy.

## Features
- **Instant Upgrade**: Input one thought, get Clear, Business, and IELTS versions.
- **Handy Patterns**: Reusable expression structures to organize thoughts.
- **Feynman Challenge**: Simple prompts to re-say your idea to ensure understanding.
- **Local History**: All interactions are saved locally to your device.
- **Voice Support**: Integrated speech-to-text and text-to-speech.

## Tech Stack
- React (Vite)
- TypeScript
- Tailwind CSS
- Gemini AI (Optional, falls back to Mock)
- Web Speech API

## Getting Started

### Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Deployment to Vercel
1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. (Optional) Set `API_KEY` in Vercel Environment Variables to enable Gemini AI. If not set, the app will use its high-quality deterministic mock engine.
4. Deploy!

## Troubleshooting
- **Blank Screen**: Ensure `index.html` has `<div id="root"></div>` and points to `./index.tsx`. 
- **API Errors**: The app handles API missing gracefully by using a local mock generator.
- **Voice Input**: Ensure you grant microphone permissions when prompted.
