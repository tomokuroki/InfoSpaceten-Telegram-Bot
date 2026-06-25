const ru = require('../locales/ru');
const en = require('../locales/en');
const zh = require('../locales/zh');

function getLocale(lang) {
  if (lang === 'en') return en;
  if (lang === 'zh') return zh;
  return ru;
}

function showMainMenu(bot, chatId, lang) {
  const t = getLocale(lang);
  
  const inlineKeyboard = [
    [
      { text: t.categories.about, callback_data: 'cat_about' },
      { text: t.categories.profile, callback_data: 'cat_profile' }
    ],
    [
      { text: t.categories.design, callback_data: 'cat_design' },
      { text: t.categories.features, callback_data: 'cat_features' }
    ],
    [
      { text: t.categories.bulletins, callback_data: 'cat_bulletins' },
      { text: t.categories.blogs, callback_data: 'cat_blogs' }
    ],
    [
      { text: t.categories.friends, callback_data: 'cat_friends' },
      { text: t.categories.faq, callback_data: 'cat_faq' }
    ],
    [
      { text: t.change_lang, callback_data: 'change_lang' }
    ]
  ];

  const opts = {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: inlineKeyboard
    }
  };

  bot.sendMessage(chatId, t.welcome, opts);
}

module.exports = { showMainMenu, getLocale };
