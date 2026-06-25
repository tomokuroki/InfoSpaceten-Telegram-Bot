const { getDb } = require('../db/database');
const { showMainMenu, getLocale } = require('./menu');

function handleCallbackQuery(bot, callbackQuery) {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;
  const data = callbackQuery.data;
  const messageId = msg.message_id;
  const db = getDb();

  let user = db.prepare('SELECT lang FROM users WHERE user_id = ?').get(chatId);
  let lang = user ? user.lang : 'en';
  let t = getLocale(lang);

  const ack = () => bot.answerCallbackQuery(callbackQuery.id).catch(err => console.warn('Callback ACK failed:', err.message));

  if (data.startsWith('set_lang_')) {
    const selectedLang = data.split('_')[2];
    db.prepare('INSERT OR REPLACE INTO users (user_id, lang) VALUES (?, ?)').run(chatId, selectedLang);
    ack();
    bot.deleteMessage(chatId, messageId).catch(() => {});
    showMainMenu(bot, chatId, selectedLang);
    return;
  }

  if (data === 'change_lang') {
    ack();
    const opts = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Русский 🇷🇺', callback_data: 'set_lang_ru' },
            { text: 'English 🇬🇧', callback_data: 'set_lang_en' },
            { text: '中文 🇨🇳', callback_data: 'set_lang_zh' }
          ],
          [
            { text: t.back, callback_data: 'main_menu' }
          ]
        ]
      }
    };
    bot.editMessageText(t.choose_lang, { chat_id: chatId, message_id: messageId, ...opts }).catch(() => {});
    return;
  }

  if (data === 'main_menu') {
    ack();
    bot.deleteMessage(chatId, messageId).catch(() => {});
    showMainMenu(bot, chatId, lang);
    return;
  }

  if (data.startsWith('cat_')) {
    const category = data.split('_')[1];
    ack();

    const questions = db.prepare('SELECT id, question_ru, question_en, question_zh FROM knowledge WHERE category = ? ORDER BY sort_order ASC').all(category);
    
    const inlineKeyboard = [];
    questions.forEach(q => {
      let qText = q.question_ru;
      if (lang === 'en') qText = q.question_en;
      else if (lang === 'zh') qText = q.question_zh;
      inlineKeyboard.push([{ text: qText, callback_data: `q_${q.id}` }]);
    });
    
    inlineKeyboard.push([{ text: t.back, callback_data: 'main_menu' }]);

    const catTitle = t.categories[category] || category;
    const opts = {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    };

    bot.editMessageText(`<b>${catTitle}</b>\n\n${t.select_question}`, {
      chat_id: chatId,
      message_id: messageId,
      ...opts
    }).catch(() => {});
    return;
  }

  if (data.startsWith('q_')) {
    const qId = parseInt(data.split('_')[1], 10);
    ack();

    const questionObj = db.prepare('SELECT category, question_ru, question_en, question_zh, answer_ru, answer_en, answer_zh FROM knowledge WHERE id = ?').get(qId);
    
    if (!questionObj) {
      bot.sendMessage(chatId, t.no_answer);
      return;
    }

    let questionText = questionObj.question_ru;
    let answerText = questionObj.answer_ru;
    if (lang === 'en') {
      questionText = questionObj.question_en;
      answerText = questionObj.answer_en;
    } else if (lang === 'zh') {
      questionText = questionObj.question_zh;
      answerText = questionObj.answer_zh;
    }
    const category = questionObj.category;

    const inlineKeyboard = [
      [
        { text: t.back, callback_data: `cat_${category}` },
        { text: t.main_menu_btn, callback_data: 'main_menu' }
      ]
    ];

    const opts = {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    };

    const fullMessage = `❓ <b>${questionText}</b>\n\n${answerText}`;

    bot.editMessageText(fullMessage, {
      chat_id: chatId,
      message_id: messageId,
      ...opts
    }).catch(() => {});
    return;
  }
}

module.exports = { handleCallbackQuery };
