# 🤖 Serverless Telegram AI Bot on Vercel

A lightweight, 24/7 active, serverless Telegram AI Chatbot built using Node.js, [Telegraf](https://telegraf.js.org/), and [OpenRouter API](https://openrouter.ai/), designed to be deployed for free on [Vercel](https://vercel.com/). The bot is configured to respond in **English** by default.

---

## 📁 Project Directory Structure

Create a directory on your system and organize your project files as follows:

```text
my-telegram-ai-bot/
├── api/
│   └── webhook.js      # Serverless logic handling Telegram updates & AI requests
├── package.json        # Project metadata, scripts, and Node.js dependencies
├── vercel.json         # Vercel serverless routing & build configuration
└── README.md           # Complete setup documentation and operational guide
