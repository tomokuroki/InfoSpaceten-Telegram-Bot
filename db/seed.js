const { getDb } = require('./database');

const knowledge = [
  // ── ABOUT ─────────────────────────────────────────────────────────────────
  {
    category: 'about',
    sort_order: 1,
    question_ru: 'Что такое Spaceten?',
    question_en: 'What is Spaceten?',
    question_zh: '什么是 Spaceten？',
    answer_ru:
      '🚀 <b>Spaceten</b> — это социальная сеть нового (и одновременно старого) поколения!\n\n' +
      'Вдохновлённая легендарными платформами <b>MySpace</b> и <b>SpaceHey</b>, Spaceten возрождает дух ранних 2000-х: ' +
      'персонализированные профили, глиттерные аватарки, кастомные CSS-страницы и настоящее ощущение своего уголка в интернете.\n\n' +
      '✨ Здесь каждый профиль — это <i>уникальная веб-страница</i>, а не безликая карточка из шаблона.',
    answer_en:
      '🚀 <b>Spaceten</b> is a social network for a new (and simultaneously old) generation!\n\n' +
      'Inspired by legendary platforms <b>MySpace</b> and <b>SpaceHey</b>, Spaceten revives the spirit of the early 2000s: ' +
      'personalized profiles, glitter avatars, custom CSS pages, and the real feeling of having your own corner of the internet.\n\n' +
      '✨ Every profile here is a <i>unique web page</i>, not a faceless template card.',
    answer_zh:
      '🚀 <b>Spaceten</b> 是新一代（同时也是老一代）的社交网络！\n\n' +
      '受到传奇平台 <b>MySpace</b> 和 <b>SpaceHey</b> 的启发，Spaceten 重温了 2000 年代初期的精神：' +
      '个性化主页、闪闪发光的头像、自定义 CSS 页面，以及拥有自己专属网络角落的真实感觉。\n\n' +
      '✨ 在这里，每个个人主页都是一个<i>独特的网页</i>，而不是模版化的单调卡片。',
  },
  {
    category: 'about',
    sort_order: 2,
    question_ru: 'Чем Spaceten отличается от VK или Instagram?',
    question_en: 'How is Spaceten different from VK or Instagram?',
    question_zh: 'Spaceten 与 VK 或 Instagram 有何不同？',
    answer_ru:
      '🔍 <b>Главные отличия Spaceten:</b>\n\n' +
      '• <b>Свобода кастомизации</b> — редактируй HTML и CSS своего профиля как хочешь\n' +
      '• <b>Нет алгоритмов</b> — ты сам решаешь, что смотреть\n' +
      '• <b>Без рекламы</b> — только чистый контент от людей\n' +
      '• <b>Ретро-атмосфера</b> — сайт намеренно стилизован под эпоху Web 1.0/2.0\n' +
      '• <b>Сообщество</b> — здесь ценят личность, а не лайки\n\n' +
      'VK и Instagram — это корпоративные клетки. Spaceten — это <i>твой</i> дом 🏠',
    answer_en:
      '🔍 <b>Key differences of Spaceten:</b>\n\n' +
      '• <b>Customization freedom</b> — edit your profile\'s HTML and CSS however you want\n' +
      '• <b>No algorithms</b> — you decide what to view\n' +
      '• <b>No ads</b> — just pure content from real people\n' +
      '• <b>Retro atmosphere</b> — the site is intentionally styled after the Web 1.0/2.0 era\n' +
      '• <b>Community</b> — personality is valued here, not likes\n\n' +
      'VK and Instagram are corporate cages. Spaceten is <i>your</i> home 🏠',
    answer_zh:
      '🔍 <b>Spaceten 的主要区别：</b>\n\n' +
      '• <b>定制自由</b> — 随心所欲地编辑你主页的 HTML 和 CSS\n' +
      '• <b>无算法推荐</b> — 你自己决定看什么\n' +
      '• <b>无广告</b> — 只有来自真人用户的纯净内容\n' +
      '• <b>复古氛围</b> — 网站故意采用了 Web 1.0/2.0 时代的风格\n' +
      '• <b>注重社区</b> — 这里看重的是个性，而不是点赞数\n\n' +
      'VK 和 Instagram 是商业牢笼。而 Spaceten 是<i>你</i>的家 🏠',
  },
  {
    category: 'about',
    sort_order: 3,
    question_ru: 'Кто создал Spaceten?',
    question_en: 'Who created Spaceten?',
    question_zh: '是谁创建了 Spaceten？',
    answer_ru:
      '👨‍💻 <b>Spaceten</b> создан разработчиком <b>tomokuroki</b> (https://github.com/tomokuroki) ' +
      'и командой энтузиастов, которые скучают по той эпохе интернета, когда сеть была свободной, творческой и принадлежала обычным людям.\n\n' +
      '💡 Цель — дать людям платформу для <i>самовыражения</i>, а не для потребления контента.',
    answer_en:
      '👨‍💻 <b>Spaceten</b> was created by developer <b>tomokuroki</b> (https://github.com/tomokuroki) ' +
      'and a team of enthusiasts who miss the era of the internet when the web was free, creative, and belonged to ordinary people.\n\n' +
      '💡 The goal is to give people a platform for <i>self-expression</i>, not content consumption.',
    answer_zh:
      '👨‍💻 <b>Spaceten</b> 是由开发者 <b>tomokuroki</b> (https://github.com/tomokuroki) ' +
      '以及一群怀念那个自由、富有创意、属于普通人的互联网时代的狂热爱好者们创建的。\n\n' +
      '💡 我们的目标是给人们一个<i>自我表达</i>的平台，而不是单纯消费内容的工具。',
  },

  // ── PROFILE ───────────────────────────────────────────────────────────────
  {
    category: 'profile',
    sort_order: 1,
    question_ru: 'Как редактировать профиль?',
    question_en: 'How do I edit my profile?',
    question_zh: '如何编辑个人主页？',
    answer_ru:
      '🎨 <b>Редактирование профиля на Spaceten:</b>\n\n' +
      '1️⃣ Войди в свой аккаунт\n' +
      '2️⃣ Перейди в раздел <b>«Мой профиль»</b>\n' +
      '3️⃣ Нажми <b>«Редактировать»</b>\n' +
      '4️⃣ Заполни поля: имя, о себе, интересы, музыка, кино\n' +
      '5️⃣ Загрузи аватарку и обложку\n' +
      '6️⃣ При желании добавь кастомный <b>CSS</b> для полной персонализации\n' +
      '7️⃣ Нажми <b>«Сохранить»</b> — готово! ✅',
    answer_en:
      '🎨 <b>Editing your Spaceten profile:</b>\n\n' +
      '1️⃣ Log into your account\n' +
      '2️⃣ Go to <b>"My Profile"</b>\n' +
      '3️⃣ Click <b>"Edit"</b>\n' +
      '4️⃣ Fill in the fields: name, about me, interests, music, movies\n' +
      '5️⃣ Upload an avatar and cover image\n' +
      '6️⃣ Optionally add custom <b>CSS</b> for full personalization\n' +
      '7️⃣ Click <b>"Save"</b> — done! ✅',
    answer_zh:
      '🎨 <b>在 Spaceten 编辑您的个人主页：</b>\n\n' +
      '1️⃣ 登录您的账户\n' +
      '2️⃣ 前往 <b>“我的主页” (My Profile)</b>\n' +
      '3️⃣ 点击 <b>“编辑” (Edit)</b>\n' +
      '4️⃣ 填写字段：姓名、关于我、兴趣、音乐、电影\n' +
      '5️⃣ 上传头像和封面图片\n' +
      '6️⃣ （可选）添加自定义 <b>CSS</b> 代码以实现深度个性化\n' +
      '7️⃣ 点击 <b>“保存” (Save)</b> — 大功告成！✅',
  },
  {
    category: 'profile',
    sort_order: 2,
    question_ru: 'Что такое кастомный CSS профиля?',
    question_en: 'What is profile custom CSS?',
    question_zh: '什么是主页自定义 CSS？',
    answer_ru:
      '💅 <b>Кастомный CSS</b> — это суперсила Spaceten!\n\n' +
      'Ты можешь написать собственные CSS-стили, которые изменят внешний вид твоего профиля:\n\n' +
      '• Поменять цвет фона и текста\n' +
      '• Добавить анимации и эффекты\n' +
      '• Изменить шрифты\n' +
      '• Добавить gif-фоны в стиле 2000-х 🌈\n' +
      '• Сделать прозрачные блоки (glassmorphism)\n\n' +
      '<i>Пример:</i>\n<code>body { background: black; color: #00ff00; }</code>\n\n' +
      '⚠️ Осторожно — сломанный CSS может испортить отображение профиля!',
    answer_en:
      '💅 <b>Custom CSS</b> is Spaceten\'s superpower!\n\n' +
      'You can write your own CSS styles to change the look of your profile:\n\n' +
      '• Change background and text colors\n' +
      '• Add animations and effects\n' +
      '• Change fonts\n' +
      '• Add 2000s-style gif backgrounds 🌈\n' +
      '• Create transparent blocks (glassmorphism)\n\n' +
      '<i>Example:</i>\n<code>body { background: black; color: #00ff00; }</code>\n\n' +
      '⚠️ Warning — broken CSS can ruin your profile\'s display!',
    answer_zh:
      '💅 <b>自定义 CSS</b> 是 Spaceten 的终极超能力！\n\n' +
      '您可以编写自己的 CSS 样式来彻底改变个人主页的外观：\n\n' +
      '• 更改背景和文字颜色\n' +
      '• 添加动画和特效\n' +
      '• 更改字体\n' +
      '• 添加 2000 年代风格的 GIF 动态背景 🌈\n' +
      '• 制作半透明板块 (毛玻璃效果)\n\n' +
      '<i>示例：</i>\n<code>body { background: black; color: #00ff00; }</code>\n\n' +
      '⚠️ 警告 — 错误的 CSS 代码可能会破坏您主页的正常显示！',
  },
  {
    category: 'profile',
    sort_order: 3,
    question_ru: 'Что такое «Топ друзей»?',
    question_en: 'What is "Top Friends"?',
    question_zh: '什么是“好友 Top 8”？',
    answer_ru:
      '👑 <b>Топ друзей</b> — культовая фишка эпохи MySpace!\n\n' +
      'Это список из <b>8 друзей</b>, которых ты размещаешь на главной странице своего профиля. ' +
      'Они отображаются с аватарками в специальном блоке.\n\n' +
      '🎭 В эпоху MySpace топ друзей был источником социальной драмы: ' +
      'попасть в чей-то топ значило быть особенным!\n\n' +
      'На Spaceten эта традиция жива — выбирай своих 8 избранных с умом 😏',
    answer_en:
      '👑 <b>Top Friends</b> is the iconic feature from the MySpace era!\n\n' +
      'It\'s a list of <b>8 friends</b> you place on the front page of your profile. ' +
      'They are displayed with avatars in a special block.\n\n' +
      '🎭 In the MySpace era, the Top Friends list was a source of social drama: ' +
      'being in someone\'s top meant you were special!\n\n' +
      'On Spaceten this tradition lives on — choose your 8 wisely 😏',
    answer_zh:
      '👑 <b>Top 好友 (Top Friends)</b> 是 MySpace 时代最经典的功能！\n\n' +
      '这是你在个人主页首屏展示的 <b>8 位好友</b> 的列表，他们将带头像显示在专属版块中。\n\n' +
      '🎭 在 MySpace 时代，Top 好友列表曾是社交大戏的舞台：' +
      '能进入某人的 Top 8 意味着你对他非常特别！\n\n' +
      '在 Spaceten，这个传统得到了完美的保留 — 谨慎挑选你的 8 位挚友吧 😏',
  },

  // ── DESIGN ────────────────────────────────────────────────────────────────
  {
    category: 'design',
    sort_order: 1,
    question_ru: 'Почему такой старый дизайн?',
    question_en: 'Why such an old-looking design?',
    question_zh: '为什么设计看起来这么老旧？',
    answer_ru:
      '🕹️ <b>Ретро-дизайн — это философия, а не баг!</b>\n\n' +
      'Spaceten намеренно воссоздаёт атмосферу интернета 2000-2008 годов. Вот почему:\n\n' +
      '🎯 <b>Ностальгия</b> — для тех, кто помнит эту эпоху, это тёплые воспоминания\n' +
      '🎯 <b>Идентичность</b> — ретро-стиль выделяет нас среди современных плоских сайтов\n' +
      '🎯 <b>Свобода</b> — старый веб был менее корпоративным и более человечным\n' +
      '🎯 <b>Эстетика</b> — Y2K-стиль снова в моде!\n\n' +
      'Градиентные кнопки, таблицы, Comic Sans — это не ошибка, это <i>art direction</i> ✨',
    answer_en:
      '🕹️ <b>Retro design is a philosophy, not a bug!</b>\n\n' +
      'Spaceten intentionally recreates the atmosphere of the 2000–2008 internet. Here\'s why:\n\n' +
      '🎯 <b>Nostalgia</b> — for those who remember this era, it brings warm memories\n' +
      '🎯 <b>Identity</b> — retro style sets us apart from modern flat websites\n' +
      '🎯 <b>Freedom</b> — the old web was less corporate and more human\n' +
      '🎯 <b>Aesthetics</b> — Y2K style is back in fashion!\n\n' +
      'Gradient buttons, tables, Comic Sans — that\'s not a mistake, it\'s <i>art direction</i> ✨',
    answer_zh:
      '🕹️ <b>复古设计是一种哲学，而不是缺陷！</b>\n\n' +
      'Spaceten 特意还原了 2000–2008 年间的互联网氛围。原因如下：\n\n' +
      '🎯 <b>情怀</b> — 对经历过那个时代的人来说，这代表着温暖的回忆\n' +
      '🎯 <b>独特性</b> — 复古风格让我们在当今扁平化的现代网站中脱颖而出\n' +
      '🎯 <b>自由</b> — 曾经的互联网少了一些商业铜臭，多了一些人情味\n' +
      '🎯 <b>美学</b> — Y2K (千禧年) 美学又重新流行起来了！\n\n' +
      '渐变按钮、表格布局、Comic Sans 字体 — 这不是错误，而是我们的<i>设计方向</i> ✨',
  },
  {
    category: 'design',
    sort_order: 2,
    question_ru: 'Что такое Web 1.0 и Web 2.0?',
    question_en: 'What is Web 1.0 and Web 2.0?',
    question_zh: '什么是 Web 1.0 和 Web 2.0？',
    answer_ru:
      '🌐 <b>Web 1.0 (1991–2004)</b> — «Читаемый веб»\n' +
      'Статичные страницы, минимум взаимодействия, сайты как электронные брошюры\n\n' +
      '🌐 <b>Web 2.0 (2004–2010)</b> — «Социальный веб»\n' +
      'Появились блоги, соцсети, пользовательский контент. Эпоха MySpace, LiveJournal.\n\n' +
      'Spaceten живёт именно в эстетике Web 2.0: таблицы, блоки, яркие цвета, ' +
      'гифки и ощущение, что каждый может создать своё место в сети 💻',
    answer_en:
      '🌐 <b>Web 1.0 (1991–2004)</b> — "Readable Web"\n' +
      'Static pages, minimal interaction, websites as electronic brochures\n\n' +
      '🌐 <b>Web 2.0 (2004–2010)</b> — "Social Web"\n' +
      'Blogs, social networks, and user content emerged. The era of MySpace, LiveJournal.\n\n' +
      'Spaceten lives in the Web 2.0 aesthetic: tables, blocks, bright colors, ' +
      'GIFs, and the feeling that anyone can create their own place on the internet 💻',
    answer_zh:
      '🌐 <b>Web 1.0 (1991–2004)</b> — “只读网”\n' +
      '静态页面，几乎没有互动，网站就像电子画册。\n\n' +
      '🌐 <b>Web 2.0 (2004–2010)</b> — “社交网”\n' +
      '博客、社交网络和用户生成内容开始涌现。MySpace、LiveJournal 的黄金时代。\n\n' +
      'Spaceten 正是生根于 Web 2.0 美学：表格、边框块、鲜艳的色彩、' +
      'GIF 动图以及让每个人都能在网上建立自己空间的归属感 💻',
  },

  // ── FEATURES ──────────────────────────────────────────────────────────────
  {
    category: 'features',
    sort_order: 1,
    question_ru: 'Какие главные фишки Spaceten?',
    question_en: 'What are the main features of Spaceten?',
    question_zh: 'Spaceten 的核心功能有哪些？',
    answer_ru:
      '⭐ <b>Главные возможности Spaceten:</b>\n\n' +
      '🎨 <b>Кастомные профили</b> — CSS/HTML редактирование\n' +
      '📌 <b>Булетины</b> — публичные объявления для друзей\n' +
      '📝 <b>Блоги</b> — пиши длинные посты в своём стиле\n' +
      '🎵 <b>Музыкальный плеер</b> — добавь трек на профиль\n' +
      '👥 <b>Топ-8 друзей</b> — выбери самых важных\n' +
      '💬 <b>Комментарии</b> — оставляй записи на стенах\n' +
      '🖼️ <b>Фотоальбомы</b> — храни воспоминания\n' +
      '📊 <b>Настроение</b> — расскажи что ты сейчас чувствуешь\n' +
      '🌟 <b>Статус</b> — короткая фраза на профиле',
    answer_en:
      '⭐ <b>Main Spaceten features:</b>\n\n' +
      '🎨 <b>Custom profiles</b> — CSS/HTML editing\n' +
      '📌 <b>Bulletins</b> — public announcements for friends\n' +
      '📝 <b>Blogs</b> — write long posts in your own style\n' +
      '🎵 <b>Music player</b> — add a track to your profile\n' +
      '👥 <b>Top-8 friends</b> — choose the most important ones\n' +
      '💬 <b>Comments</b> — leave messages on walls\n' +
      '🖼️ <b>Photo albums</b> — store your memories\n' +
      '📊 <b>Mood</b> — tell people how you\'re feeling\n' +
      '🌟 <b>Status</b> — a short phrase on your profile',
    answer_zh:
      '⭐ <b>Spaceten 的主要功能：</b>\n\n' +
      '🎨 <b>定制主页</b> — 自由的 CSS/HTML 编辑\n' +
      '📌 <b>公告板 (Bulletins)</b> — 面向好友的公共广播消息\n' +
      '📝 <b>博客 (Blogs)</b> — 用自己的风格撰写长篇文章\n' +
      '🎵 <b>音乐播放器</b> — 在主页背景播放您喜爱的背景音乐\n' +
      '👥 <b>Top 8 好友</b> — 挑选最核心的好友展示\n' +
      '💬 <b>留言板 (Comments)</b> — 在好友的背景墙上留言\n' +
      '🖼️ <b>相册 (Photo Albums)</b> — 保存美好回忆\n' +
      '📊 <b>心情 (Mood)</b> — 分享你此刻的感受\n' +
      '🌟 <b>状态 (Status)</b> — 在主页上显示简短的状态签名',
  },
  {
    category: 'features',
    sort_order: 2,
    question_ru: 'Как добавить музыку на профиль?',
    question_en: 'How do I add music to my profile?',
    question_zh: '如何将音乐添加到我的主页？',
    answer_ru:
      '🎵 <b>Музыка на профиле Spaceten</b>\n\n' +
      'В настройках профиля есть специальный раздел <b>«Музыка»</b>.\n\n' +
      'Ты можешь:\n' +
      '• Вставить ссылку на трек (SoundCloud, прямая ссылка на mp3)\n' +
      '• Настроить автовоспроизведение\n' +
      '• Написать название трека и исполнителя\n\n' +
      '🎶 Трек будет играть, когда кто-то зайдёт на твой профиль — ' +
      'прямо как в MySpace! Классика жанра.',
    answer_en:
      '🎵 <b>Music on your Spaceten profile</b>\n\n' +
      'In the profile settings there is a special <b>"Music"</b> section.\n\n' +
      'You can:\n' +
      '• Paste a track link (SoundCloud, direct mp3 link)\n' +
      '• Set up autoplay\n' +
      '• Write the track name and artist\n\n' +
      '🎶 The track will play when someone visits your profile — ' +
      'just like MySpace! A classic.',
    answer_zh:
      '🎵 <b>Spaceten 个人主页音乐功能：</b>\n\n' +
      '在您的个人主页设置中有一个专门的 <b>“音乐” (Music)</b> 版块。\n\n' +
      '您可以：\n' +
      '• 粘贴歌曲链接 (SoundCloud 或直接的 mp3 文件链接)\n' +
      '• 开启/关闭自动播放\n' +
      '• 填入歌名和歌手名\n\n' +
      '🎶 别人一进入您的个人主页，歌曲就会开始播放 — 完美的 MySpace 复古体验！',
  },
  {
    category: 'features',
    sort_order: 3,
    question_ru: 'Есть ли мобильная версия?',
    question_en: 'Is there a mobile version?',
    question_zh: '有手机版/移动端吗？',
    answer_ru:
      '📱 <b>Мобильная версия Spaceten</b>\n\n' +
      'Сайт адаптирован для мобильных устройств — ты можешь пользоваться им со смартфона.\n\n' +
      'Однако учти: <i>ретро-дизайн</i> изначально создавался для десктопов, ' +
      'поэтому некоторые кастомные CSS-профили могут выглядеть необычно на маленьком экране.\n\n' +
      '💡 Для лучшего опыта рекомендуется <b>компьютер или планшет</b>.',
    answer_en:
      '📱 <b>Spaceten mobile version</b>\n\n' +
      'The site is adapted for mobile devices — you can use it from your smartphone.\n\n' +
      'However, keep in mind: the <i>retro design</i> was originally created for desktops, ' +
      'so some custom CSS profiles may look unusual on a small screen.\n\n' +
      '💡 For the best experience, a <b>computer or tablet</b> is recommended.',
    answer_zh:
      '📱 <b>Spaceten 移动端适配：</b>\n\n' +
      '网站已针对手机和移动设备进行自适应优化 — 您可以使用手机浏览器流畅访问。\n\n' +
      '但需要注意：<i>复古设计</i>最初是为大屏幕电脑设计的，' +
      '因此某些用户高度定制的自定义 CSS 页面在较小屏幕上可能会有显示偏差。\n\n' +
      '💡 为了获得最完美的视觉效果，推荐使用<b>电脑或平板设备</b>访问。',
  },

  // ── BULLETINS ─────────────────────────────────────────────────────────────
  {
    category: 'bulletins',
    sort_order: 1,
    question_ru: 'Что такое булетины?',
    question_en: 'What are bulletins?',
    question_zh: '什么是公告 (Bulletins)？',
    answer_ru:
      '📌 <b>Булетины (Bulletins)</b> — это публичные объявления!\n\n' +
      'Представь доску объявлений в школьном коридоре, только цифровую.\n\n' +
      'Когда ты пишешь булетин:\n' +
      '• Его видят <b>все твои друзья</b> в своей ленте\n' +
      '• Он остаётся в общей доске булетинов\n' +
      '• Друзья могут его <b>репостить</b> — и тогда его увидят их друзья\n\n' +
      '📢 Идеально для:\n' +
      '— Объявлений и новостей\n' +
      '— Опросов и вопросов\n' +
      '— Розыгрышей и конкурсов\n' +
      '— Мемов и приколов 😂',
    answer_en:
      '📌 <b>Bulletins</b> are public announcements!\n\n' +
      'Imagine a bulletin board in a school hallway, but digital.\n\n' +
      'When you write a bulletin:\n' +
      '• <b>All your friends</b> see it in their feed\n' +
      '• It stays on the shared bulletins board\n' +
      '• Friends can <b>repost</b> it — and then their friends will see it\n\n' +
      '📢 Perfect for:\n' +
      '— Announcements and news\n' +
      '— Polls and questions\n' +
      '— Giveaways and contests\n' +
      '— Memes and fun stuff 😂',
    answer_zh:
      '📌 <b>公告 (Bulletins)</b> 就是全员公开通知！\n\n' +
      '想象一下学校走廊里的黑板报，只不过是数字版的。\n\n' +
      '当你发布一条公告时：\n' +
      '• <b>你的所有好友</b>都会在他们的动态流中看到它\n' +
      '• 它会暂时保存在公共公告板上\n' +
      '• 好友可以<b>转发 (Repost)</b> 它，转给他们的好友看\n\n' +
      '📢 极其适合发布：\n' +
      '— 各种临时通知与新闻\n' +
      '— 投票或向大家提问\n' +
      '— 抽奖及活动宣传\n' +
      '— 各种搞笑表情包和段子 😂',
  },
  {
    category: 'bulletins',
    sort_order: 2,
    question_ru: 'Как написать булетин?',
    question_en: 'How do I write a bulletin?',
    question_zh: '如何发布公告？',
    answer_ru:
      '✍️ <b>Как создать булетин на Spaceten:</b>\n\n' +
      '1️⃣ Зайди в раздел <b>«Булетины»</b> в навигации\n' +
      '2️⃣ Нажми кнопку <b>«Написать булетин»</b>\n' +
      '3️⃣ Введи заголовок\n' +
      '4️⃣ Напиши текст (поддерживается форматирование)\n' +
      '5️⃣ Нажми <b>«Опубликовать»</b>\n\n' +
      '🎉 Готово! Твои друзья увидят его в своей ленте булетинов.',
    answer_en:
      '✍️ <b>How to create a bulletin on Spaceten:</b>\n\n' +
      '1️⃣ Go to the <b>"Bulletins"</b> section in the navigation\n' +
      '2️⃣ Click the <b>"Write Bulletin"</b> button\n' +
      '3️⃣ Enter a title\n' +
      '4️⃣ Write your text (formatting is supported)\n' +
      '5️⃣ Click <b>"Publish"</b>\n\n' +
      '🎉 Done! Your friends will see it in their bulletin feed.',
    answer_zh:
      '✍️ <b>在 Spaceten 发布公告：</b>\n\n' +
      '1️⃣ 在导航栏中进入 <b>“公告板” (Bulletins)</b> 页面\n' +
      '2️⃣ 点击 <b>“撰写公告” (Write Bulletin)</b> 按钮\n' +
      '3️⃣ 输入标题\n' +
      '4️⃣ 编写正文内容 (支持基本排版格式)\n' +
      '5️⃣ 点击 <b>“发布” (Publish)</b>\n\n' +
      '🎉 发布成功！你的好友将在他们的公告栏中收到提醒。',
  },

  // ── BLOGS ─────────────────────────────────────────────────────────────────
  {
    category: 'blogs',
    sort_order: 1,
    question_ru: 'Что такое блоги на Spaceten?',
    question_en: 'What are blogs on Spaceten?',
    question_zh: 'Spaceten 博客是什么？',
    answer_ru:
      '📝 <b>Блоги Spaceten</b> — твой личный дневник!\n\n' +
      'В отличие от булетинов, блог — это:\n' +
      '• Длинные, развёрнутые посты\n' +
      '• Хранятся <b>на твоём профиле</b> навсегда\n' +
      '• Могут читать все (или только друзья — по настройке)\n' +
      '• Поддерживают форматирование текста, картинки\n\n' +
      '✒️ Пиши о жизни, музыке, играх, путешествиях — ' +
      'блог это твоё пространство для выражения себя!',
    answer_en:
      '📝 <b>Spaceten Blogs</b> — your personal diary!\n\n' +
      'Unlike bulletins, a blog is:\n' +
      '• Long, detailed posts\n' +
      '• Stored <b>on your profile</b> permanently\n' +
      '• Can be read by everyone (or just friends — configurable)\n' +
      '• Supports text formatting and images\n\n' +
      '✒️ Write about life, music, games, travel — ' +
      'a blog is your space for self-expression!',
    answer_zh:
      '📝 <b>Spaceten 博客 (Blogs)</b> — 您的个人电子日记！\n\n' +
      '与临时公告不同，博客文章具有以下特点：\n' +
      '• 支持发表长篇大论的深度文章\n' +
      '• 永久保留在<b>您的个人主页</b>上\n' +
      '• 可设置为所有人可见（或仅限好友可见）\n' +
      '• 支持丰富的富文本格式排版、插入图片\n\n' +
      '✒️ 记录生活日常、分享音乐、游戏评测、旅行游记 — 博客是你深度倾诉心声的独立空间！',
  },
  {
    category: 'blogs',
    sort_order: 2,
    question_ru: 'Чем блог отличается от булетина?',
    question_en: 'How is a blog different from a bulletin?',
    question_zh: '博客和公告有什么区别？',
    answer_ru:
      '📊 <b>Блог vs Булетин:</b>\n\n' +
      '• Блог: длинные тексты, хранятся в профиле, долгосрочный контент.\n' +
      '• Булетин: короткие/любые заметки, рассылаются по лентам друзей, временный характер.\n\n' +
      '💡 Блог — для глубоких текстов, булетин — для быстрых объявлений!',
    answer_en:
      '📊 <b>Blog vs Bulletin:</b>\n\n' +
      '• Blog: long texts, stored on profile, permanent content.\n' +
      '• Bulletin: short notes, sent to friends\' feeds, temporary nature.\n\n' +
      '💡 Blog — for deep texts, bulletin — for quick announcements!',
    answer_zh:
      '📊 <b>博客 (Blog) 与 公告 (Bulletin) 区别对比：</b>\n\n' +
      '• <b>博客</b>：长文章，归档于个人主页，作为长期静态内容沉淀。\n' +
      '• <b>公告</b>：简短便签，广播到好友的动态流，具有实时性和短期时效性。\n\n' +
      '💡 小结：博客用于记录深思熟虑的内容，公告用于发布即时的简讯！',
  },

  // ── FRIENDS ───────────────────────────────────────────────────────────────
  {
    category: 'friends',
    sort_order: 1,
    question_ru: 'Как добавить друга?',
    question_en: 'How do I add a friend?',
    question_zh: '如何添加好友？',
    answer_ru:
      '👥 <b>Добавление друга на Spaceten:</b>\n\n' +
      '1️⃣ Найди профиль пользователя\n' +
      '2️⃣ Нажми кнопку <b>«Добавить в друзья»</b>\n' +
      '3️⃣ Пользователь получит запрос в друзья\n' +
      '4️⃣ После принятия вы оба станете друзьями 🎉\n\n' +
      '🔍 Найти пользователей можно через:\n' +
      '• Поиск по имени/нику\n' +
      '• Список друзей других пользователей\n' +
      '• Ленту активности',
    answer_en:
      '👥 <b>Adding a friend on Spaceten:</b>\n\n' +
      '1️⃣ Find the user\'s profile\n' +
      '2️⃣ Click the <b>"Add Friend"</b> button\n' +
      '3️⃣ The user will receive a friend request\n' +
      '4️⃣ After accepting, you\'ll both be friends 🎉\n\n' +
      '🔍 Find users through:\n' +
      '• Search by name/nickname\n' +
      '• Other users\' friend lists\n' +
      '• Activity feed',
    answer_zh:
      '👥 <b>在 Spaceten 添加好友：</b>\n\n' +
      '1️⃣ 访问目标用户的个人主页\n' +
      '2️⃣ 点击 <b>“加为好友” (Add Friend)</b> 按钮\n' +
      '3️⃣ 对方会收到系统发送的好友请求申请\n' +
      '4️⃣ 对方接受请求后，你们双方就成为正式好友啦 🎉\n\n' +
      '🔍 发现用户的方式：\n' +
      '• 通过姓名或昵称进行全局搜索\n' +
      '• 查看其他用户的好友列表\n' +
      '• 浏览社区公共动态广场',
  },
  {
    category: 'friends',
    sort_order: 2,
    question_ru: 'Что можно делать с друзьями?',
    question_en: 'What can I do with friends?',
    question_zh: '和好友之间可以进行哪些互动？',
    answer_ru:
      '🤝 <b>Возможности с друзьями:</b>\n\n' +
      '• 💬 Оставлять <b>комментарии</b> на профиле\n' +
      '• 📌 Видеть <b>булетины</b> в ленте\n' +
      '• 📝 Читать <b>блоги</b> друзей\n' +
      '• 👑 Добавлять в <b>Топ-8</b>\n' +
      '• 📸 Смотреть <b>фотоальбомы</b>\n' +
      '• 🎵 Слушать музыку с их профилей\n' +
      '• 💌 Отправлять <b>личные сообщения</b>',
    answer_en:
      '🤝 <b>What you can do with friends:</b>\n\n' +
      '• 💬 Leave <b>comments</b> on their profile\n' +
      '• 📌 See their <b>bulletins</b> in your feed\n' +
      '• 📝 Read their <b>blogs</b>\n' +
      '• 👑 Add them to your <b>Top-8</b>\n' +
      '• 📸 View their <b>photo albums</b>\n' +
      '• 🎵 Listen to music from their profiles\n' +
      '• 💌 Send <b>private messages</b>',
    answer_zh:
      '🤝 <b>好友之间的互动方式：</b>\n\n' +
      '• 💬 在对方主页的背景墙上留言 <b>(Comments)</b>\n' +
      '• 📌 在自己的动态流中查看对方发布的公告 <b>(Bulletins)</b>\n' +
      '• 📝 订阅阅读好友写的博客文章 <b>(Blogs)</b>\n' +
      '• 👑 将对方提拔为自己的 <b>Top-8 首屏好友</b>\n' +
      '• 📸 查看对方共享的<b>相册照片</b>\n' +
      '• 🎵 聆听好友主页配置的背景音乐\n' +
      '• 💌 互相发送端到端的<b>私信私聊消息</b>',
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  {
    category: 'faq',
    sort_order: 1,
    question_ru: 'Как зарегистрироваться на Spaceten?',
    question_en: 'How do I register on Spaceten?',
    question_zh: '如何在 Spaceten 注册账号？',
    answer_ru:
      '📋 <b>Регистрация на Spaceten:</b>\n\n' +
      '1️⃣ Зайди на сайт <b>Spaceten</b>\n' +
      '2️⃣ Нажми <b>«Зарегистрироваться»</b>\n' +
      '3️⃣ Введи email, придумай ник и пароль\n' +
      '4️⃣ Подтверди email (если требуется)\n' +
      '5️⃣ Заполни базовую информацию профиля\n' +
      '6️⃣ Начинай общаться! 🎉\n\n' +
      '✅ Регистрация <b>бесплатная</b>',
    answer_en:
      '📋 <b>Registration on Spaceten:</b>\n\n' +
      '1️⃣ Go to the <b>Spaceten</b> website\n' +
      '2️⃣ Click <b>"Register"</b>\n' +
      '3️⃣ Enter your email, choose a nickname and password\n' +
      '4️⃣ Confirm your email (if required)\n' +
      '5️⃣ Fill in basic profile information\n' +
      '6️⃣ Start socializing! 🎉\n\n' +
      '✅ Registration is <b>free</b>',
    answer_zh:
      '📋 <b>Spaceten 注册流程：</b>\n\n' +
      '1️⃣ 访问 <b>Spaceten</b> 官方主页\n' +
      '2️⃣ 点击 <b>“注册” (Register)</b> 按钮\n' +
      '3️⃣ 输入您的邮箱地址，自定义昵称与密码\n' +
      '4️⃣ 根据提示完成邮箱激活验证 (若需要)\n' +
      '5️⃣ 填写基本的主页公开资料\n' +
      '6️⃣ 开始你的社交探索吧！🎉\n\n' +
      '✅ 注册完全<b>免费</b>',
  },
  {
    category: 'faq',
    sort_order: 2,
    question_ru: 'Безопасно ли использовать Spaceten?',
    question_en: 'Is it safe to use Spaceten?',
    question_zh: '使用 Spaceten 安全吗？',
    answer_ru:
      '🔒 <b>Безопасность на Spaceten:</b>\n\n' +
      '• Пароли хранятся в <b>зашифрованном виде</b>\n' +
      '• Ты сам контролируешь <b>приватность</b> своего профиля\n' +
      '• Можно заблокировать нежелательных пользователей\n' +
      '• Личные сообщения видны только тебе и собеседнику\n\n' +
      '⚠️ <b>Советы безопасности:</b>\n' +
      '• Не публикуй личные данные\n' +
      '• Используй надёжный пароль\n' +
      '• Не доверяй незнакомцам в ЛС',
    answer_en:
      '🔒 <b>Safety on Spaceten:</b>\n\n' +
      '• Passwords are stored <b>encrypted</b>\n' +
      '• You control your profile\'s <b>privacy</b>\n' +
      '• You can block unwanted users\n' +
      '• Private messages are visible only to you and the recipient\n\n' +
      '⚠️ <b>Safety tips:</b>\n' +
      '• Don\'t post personal information\n' +
      '• Use a strong password\n' +
      '• Don\'t trust strangers in DMs',
    answer_zh:
      '🔒 <b>Spaceten 安全保障体系：</b>\n\n' +
      '• 所有账号密码均通过<b>单向加盐加密哈希</b>安全存储\n' +
      '• 您可以自由配置并掌控自己主页的<b>隐私访问级别</b>\n' +
      '• 提供黑名单拉黑机制，防止不受欢迎的用户骚扰\n' +
      '• 个人私信消息仅发件人与收件人双方可见，确保隐私\n\n' +
      '⚠️ <b>安全建议提示：</b>\n' +
      '• 尽量避免发布敏感的真实个人隐私数据\n' +
      '• 请使用复杂的安全密码\n' +
      '• 警惕并小心私信中的陌生人诱骗信息',
  },
  {
    category: 'faq',
    sort_order: 3,
    question_ru: 'Spaceten похож на MySpace/SpaceHey?',
    question_en: 'Is Spaceten similar to MySpace/SpaceHey?',
    question_zh: 'Spaceten 与 MySpace 和 SpaceHey 相似吗？',
    answer_ru:
      '🌐 <b>Spaceten, MySpace и SpaceHey — в чём разница?</b>\n\n' +
      '<b>MySpace (2003–2011)</b>\n' +
      'Оригинальная платформа, которая создала жанр. Умерла от конкуренции с Facebook.\n\n' +
      '<b>SpaceHey (2020–настоящее)</b>\n' +
      'Современное возрождение MySpace. Очень точная копия, популярна в США и Европе.\n\n' +
      '<b>Spaceten</b>\n' +
      'Вдохновлён обоими проектами, но имеет собственную уникальную идентичность! ' +
      'В отличие от аналогов, ориентирован на международную аудиторию: полностью поддерживает русскую, английскую и китайскую языковые среды и объединяет пользователей со всего мира.\n\n' +
      '🎯 Все три проекта объединяет одно: <i>полная свобода самовыражения через кастомный дизайн профиля</i>',
    answer_en:
      '🌐 <b>Spaceten, MySpace, and SpaceHey — what\'s the difference?</b>\n\n' +
      '<b>MySpace (2003–2011)</b>\n' +
      'The original platform that created the genre. Died from competition with Facebook.\n\n' +
      '<b>SpaceHey (2020–present)</b>\n' +
      'A modern revival of MySpace. Very accurate copy, popular in the US and Europe.\n\n' +
      '<b>Spaceten</b>\n' +
      'Inspired by both projects, but has its own unique identity! ' +
      'Unlike the others, it targets a truly international audience: it fully supports Russian, English, and Chinese languages, bringing users together globally.\n\n' +
      '🎯 All three share one thing: <i>complete freedom of self-expression through a custom profile design</i>',
    answer_zh:
      '🌐 <b>Spaceten、MySpace 与 SpaceHey — 到底有什么区别？</b>\n\n' +
      '<b>MySpace (2003–2011)</b>\n' +
      '开创了该品类的鼻祖平台。后来在与 Facebook 的竞争中落败。\n\n' +
      '<b>SpaceHey (2020 至今)</b>\n' +
      'MySpace 的现代复刻版，完美还原了经典细节，在欧美市场大受欢迎。\n\n' +
      '<b>Spaceten</b>\n' +
      '融合了这两者的灵感，但拥有自己鲜明的特色！' +
      '与其他竞品不同，它致力于服务真正的国际化多元社区，全面原生支持俄语、英语以及中文环境，将来自全球各地的千禧复古爱好者们紧密连接在一起。\n\n' +
      '🎯 这三者唯一的共同点：<i>那就是通过完全自由定制的个人主页设计，倡导绝对的自我个性展现</i>',
  },
];

function seed() {
  const db = getDb();
  const count = db.prepare('SELECT COUNT(*) as c FROM knowledge').get();
  if (count.c > 0) {
    console.log('✅ База знаний уже заполнена.');
    return;
  }

  const insert = db.prepare(`
    INSERT INTO knowledge (category, sort_order, question_ru, question_en, question_zh, answer_ru, answer_en, answer_zh)
    VALUES (@category, @sort_order, @question_ru, @question_en, @question_zh, @answer_ru, @answer_en, @answer_zh)
  `);

  const insertMany = db.transaction((items) => {
    for (const item of items) insert.run(item);
  });

  insertMany(knowledge);
  console.log(`✅ Добавлено ${knowledge.length} записей в базу знаний.`);
}

module.exports = { seed };
