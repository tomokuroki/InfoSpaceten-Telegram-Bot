# InfoSpaceten Telegram 机器人 🚀

> **关于项目**：我是 Spaceten 社交网络的开发者。为了帮助新老用户快速了解并玩转我们的社交平台（类似于 MySpace 和 SpaceHey 的千禧复古风社交平台），我开发了这个专用的信息说明 Telegram 机器人。

InfoSpaceten 机器人旨在向用户全方位介绍 Spaceten 的复古美学、个性化网页定制（HTML/CSS）、独创性功能（Top 8 好友、Bulletins 公告、独立博客）以及常见问题解答。

---

## 🌟 主要功能特色

- **多语言原生支持**：
  - 支持 **英文 (默认)** 🇬🇧、**俄文** 🇷🇺 和 **中文** 🇨🇳。
  - 用户可在启动时选择语言，或在主菜单中随时更改，设置将持久化存储在数据库中。
- **SQLite 结构化知识库**：
  - 机器人的问答内容全部存储于本地轻量级 SQLite 数据库中，加载速度极快。
  - 拥有 8 大知识版块：
    1. 🚀 关于 Spaceten (About)
    2. 🎨 个人主页与定制 (Profile & CSS)
    3. 🕹️ 复古设计哲学 (Retro Design)
    4. ⭐ 平台特色功能 (Features)
    5. 📌 好友公告板 (Bulletins)
    6. 📝 独立博客 (Blogs)
    7. 👥 互动好友系统 (Friends)
    8. ❓ 常见问题解答 (FAQ)
- **Inline Keyboard 交互流**：
  - 弃用传统的键盘输入，完全依靠 Telegram 行内按钮进行点按导航。
  - 贴心提供“返回”和“回到主菜单”选项，保证极佳的交互流。
- **极度抗崩溃设计**：
  - 所有数据库事务均以 WAL 模式启动以防冲突。
  - 针对 Telegram 内部可能发生的“回调查询过期” (ETELEGRAM 400 Bad Request) 进行了全局异常保护捕获，保证机器人即使遇到旧指令也不会崩溃。

---

## 📂 项目结构

```
spaceten-bot/
├── .env                  # 环境配置文件 (包含 Bot Token)
├── .gitignore            # Git 忽略文件
├── package.json          # Node.js 依赖配置
├── index.js              # 机器人核心启动入口
├── db/
│   ├── database.js       # SQLite 连接与表结构初始化
│   └── seed.js           # 初始中/英/俄三语知识库填充
├── handlers/
│   ├── start.js          # /start 启动指令与初始语言分配
│   ├── menu.js           # 主菜单及各语种基础词条加载
│   └── callbacks.js      # 行内按钮事件分发与问答展示
└── locales/
    ├── en.js             # 英文界面词包
    ├── ru.js             # 俄文界面词包
    └── zh.js             # 中文界面词包
```

---

## 🛠️ 技术栈选择

- **运行环境**: Node.js
- **电报核心 API 库**: `node-telegram-bot-api`
- **数据库引擎**: `better-sqlite3` (高性能且无需多余依赖的 SQLite3 绑定)
- **环境配置**: `dotenv`

---

## 🚀 部署与运行

### 1. 克隆/创建项目并安装依赖
在项目根目录下，执行以下命令以安装所需依赖包：
```bash
npm install
```

### 2. 配置环境变量
在项目根目录创建一个名为 `.env` 的文件，并填入您的 Telegram Bot Token：
```ini
BOT_TOKEN=你的_TELEGRAM_BOT_TOKEN
```

### 3. 初始化并运行机器人
执行以下命令即可启动：
```bash
node index.js
```
运行后，控制台会输出：
```
⚡ Initializing Database...
✅ Database connected.
✅ 数据库填充完毕。
⚡ Starting Telegram Bot...
🚀 InfoSpaceten Bot successfully started as @InfoSpaceten_Bot!
```
首次运行会创建 `spaceten.db` 数据库并自动注入所有的问答种子数据。

---

## 💡 开发人员修改指南

### 修改或增加知识库问答
如果您需要修改问答文本或增加新的问题，只需编辑 [**`db/seed.js`**](file:///c:/Users/root/Documents/bl/spaceten-bot/db/seed.js) 对应的 `knowledge` 数组，然后删除已生成的 `spaceten.db` 文件。当重新运行 `node index.js` 时，数据库会被清空并按最新内容自动重新生成。
