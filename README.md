# 🤖 Serverless Telegram AI Bot on Vercel

A lightweight, 24/7 active, serverless Telegram AI Chatbot built using **Node.js**, **Telegraf**, and **OpenRouter API** (powered by Google Gemini 2.0 Flash Lite), designed to be deployed for free on **Vercel**.

---

## 📌 Project Overview

This bot connects Telegram with OpenRouter's API using webhooks and Vercel's serverless infrastructure.

### Key Features:
- ⚡ **Serverless & Fast**: Runs on Vercel Functions with zero server management needed.
- 💰 **100% Free Hosting**: Utilizes Vercel's generous free tier.
- 🧠 **AI Powered**: Powered by OpenRouter's Gemini 2.0 Flash Lite model for fast responses.
- 🔒 **Secure**: API keys and tokens are securely managed via Environment Variables.

---

## 📁 Project Directory Structure

Organize your project files in the following directory structure before uploading to GitHub:

```text
telegram-ai-bot/
├── api/
│   └── webhook.js      # Main serverless function code
├── package.json        # Node.js dependencies
├── vercel.json         # Vercel deployment routes config
└── README.md           # Documentation
```

---

## 🔑 Environment Variables

Set the following environment variables in your Vercel project settings (or locally in a `.env` file for testing):

| VARIABLE NAME      | DESCRIPTION                        | WHERE TO GET IT |
|--------------------|------------------------------------|-----------------|
| `BOT_TOKEN`        | Secret API Token for Telegram Bot  | From Telegram [@BotFather](https://t.me/BotFather) |
| `OPENROUTER_API_KEY` | Secret API Key for OpenRouter AI | From [https://openrouter.ai/keys](https://openrouter.ai/keys) |

> 💡 Tip: In Vercel, go to your project → **Settings** → **Environment Variables** and add these before deploying.

---

## 🚀 Deployment Steps

1. **Create a Telegram Bot**  
   - Message [@BotFather](https://t.me/BotFather) on Telegram  
   - Use `/newbot` and follow prompts to get your `BOT_TOKEN`

2. **Get OpenRouter API Key**  
   - Visit [https://openrouter.ai/keys](https://openrouter.ai/keys)  
   - Create a new key and copy it as `OPENROUTER_API_KEY`

3. **Configure Vercel**  
   - Push your code to GitHub  
   - Import the repo in [Vercel Dashboard](https://vercel.com/new)  
   - Add the two environment variables above

4. **Set Telegram Webhook**  
   After deployment, Vercel will give you a URL like:  
   `https://your-project.vercel.app/api/webhook`  

   Set it as your bot’s webhook:
   ```bash
   curl -F "url=https://your-project.vercel.app/api/webhook" \
        https://api.telegram.org/bot<BOT_TOKEN>/setWebhook
   ```

---

## 📝 Notes

- The bot uses the model ID: `google/gemini-2.0-flash-lite-001` via OpenRouter [2][14].
- Ensure your `webhook.js` handles POST requests from Telegram and forwards messages to OpenRouter’s API endpoint: `https://openrouter.ai/api/v1/chat/completions` [4][7].

---

Made with ⚡ for free, fast, and smart Telegram AI interactions.
