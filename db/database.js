const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'spaceten.db');

let db;

function getDb() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    initSchema();
  }
  return db;
}

function initSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      user_id INTEGER PRIMARY KEY,
      lang TEXT NOT NULL DEFAULT 'en',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS knowledge (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      question_ru TEXT NOT NULL,
      question_en TEXT NOT NULL,
      question_zh TEXT NOT NULL,
      answer_ru TEXT NOT NULL,
      answer_en TEXT NOT NULL,
      answer_zh TEXT NOT NULL
    );
  `);
}

module.exports = { getDb };
