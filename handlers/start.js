const { getDb } = require('../db/database');
const ru = require('../locales/ru');
const en = require('../locales/en');

function handleStart(bot, msg) {
  const chatId = msg.chat.id;
  const db = getDb();
  
  let user = db.prepare('SELECT * FROM users WHERE user_id = ?').get(chatId);
  
  if (!user) {
    db.prepare('INSERT INTO users (user_id, lang) VALUES (?, ?)').run(chatId, 'en');
    user = { user_id: chatId, lang: 'en' };
  }

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Русский 🇷🇺', callback_data: 'set_lang_ru' },
          { text: 'English 🇬🇧', callback_data: 'set_lang_en' },
          { text: '中文 🇨🇳', callback_data: 'set_lang_zh' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, en.choose_lang, opts);
}

module.exports = { handleStart };
