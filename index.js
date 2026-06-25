require('dotenv').config();
const { TelegramBot } = require('node-telegram-bot-api');
const { getDb } = require('./db/database');
const { seed } = require('./db/seed');
const { handleStart } = require('./handlers/start');
const { showMainMenu } = require('./handlers/menu');
const { handleCallbackQuery } = require('./handlers/callbacks');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('❌ Error: BOT_TOKEN is missing in the environment variables!');
  process.exit(1);
}

console.log('⚡ Initializing Database...');
try {
  const db = getDb();
  console.log('✅ Database connected.');
  seed();
} catch (err) {
  console.error('❌ Database Initialization failed:', err);
  process.exit(1);
}

console.log('⚡ Starting Telegram Bot...');
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  try {
    handleStart(bot, msg);
  } catch (err) {
    console.error('❌ Error in /start handler:', err);
  }
});

bot.onText(/\/menu/, (msg) => {
  try {
    const chatId = msg.chat.id;
    const db = getDb();
    const user = db.prepare('SELECT lang FROM users WHERE user_id = ?').get(chatId);
    const lang = user ? user.lang : 'en';
    showMainMenu(bot, chatId, lang);
  } catch (err) {
    console.error('❌ Error in /menu handler:', err);
  }
});

bot.on('callback_query', (callbackQuery) => {
  try {
    handleCallbackQuery(bot, callbackQuery);
  } catch (err) {
    console.error('❌ Error in callback_query handler:', err);
  }
});

bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    const chatId = msg.chat.id;
    const db = getDb();
    const user = db.prepare('SELECT lang FROM users WHERE user_id = ?').get(chatId);
    const lang = user ? user.lang : 'en';
    
    showMainMenu(bot, chatId, lang);
  }
});

bot.getMe().then((me) => {
  console.log(`🚀 InfoSpaceten Bot successfully started as @${me.username}!`);
}).catch((err) => {
  console.error('❌ Failed to connect to Telegram server:', err);
});
