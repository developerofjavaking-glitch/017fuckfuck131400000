const { Telegraf } = require('telegraf');
const axios = require('axios');

// Vercel Environment Variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const bot = new Telegraf(BOT_TOKEN);

// OpenRouter API Call Function
async function askOpenRouter(userPrompt) {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openrouter/free',
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful and friendly AI assistant. Always respond and interact in English.' 
          },
          { role: 'user', content: userPrompt }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenRouter Error:', error?.response?.data || error.message);
    return 'Sorry, an error occurred while processing your request. Please try again later.';
  }
}

// /start Command Handler
bot.start((ctx) => {
  ctx.reply('Hello! I am an AI Chatbot. Feel free to ask me anything in English!');
});

// Text Message Handler
bot.on('text', async (ctx) => {
  const userMessage = ctx.message.text;
  
  await ctx.sendChatAction('typing');

  const aiReply = await askOpenRouter(userMessage);
  await ctx.reply(aiReply);
});

// Vercel Serverless Function Handler
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error processing update');
    }
  } else {
    res.status(200).send('Telegram AI Bot Status: Running 24/7');
  }
};
