const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  BAN_CHATS: process.env.BAN_CHATS || "",
  PORT: toBool(process.env.PORT) || 8000,
  AUDIO_DATA: process.env.AUDIO_DATA || 'JXMMY📙ᝢ;𝓯𝓾𝓵𝓵 𝓼𝓸𝓷𝓰𝓼;https://i.imgur.com/FcH4BFg.jpeg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_dc0d_6c73_8723_f460_6731_bc18_55c3_d33b',
  LANG: process.env.LANG || 'EN',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: process.env.HANDLER  || 'null',
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  LINKPREVIEW: toBool(process.env.LINKPREVIEW || "false"),
  CONTEXTINFO: process.env.CONTEXTINFO || `{"title": "ᴊᴀʀᴠɪꜱ-ᴍᴅ", "body": "ᴀᴡᴇꜱᴏᴍᴇ 🍉", "thumbnailUrl": "https://i.imgur.com/FcH4BFg.jpeg", "renderLargerThumbnail": false, "mediaType": 1, "mediaUrl": "", "sourceUrl": "https://github.com/Loki-Xer/Jarvis-md", "showAdAttribution": true}`,
  KOYEB_API: process.env.KOYEB_API,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  API: 'https://api.lokiser.xyz/',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'JXMMY📙ᝢ',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  SAVE_STATUS: toBool(process.env.SAVE_STATUS) || true,
  STATUS_VIEW: process.env.STATUS_VIEW || "true",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "false"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;S3NPAI-MD;https://i.imgur.com/FcH4BFg.jpeg',
  MENU_FONT: process.env.MENU_FONT || "0;0",
  SUDO: process.env.SUDO || '919061949401',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || 'S3NPAI;JXMMY📙ᝢ;https://i.imgur.com/FcH4BFg.jpeg',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
