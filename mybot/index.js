const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1789464519:AAG1T8dejhOHPm7EjIN6_GWWKpaOAJAi9Qw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const arrMessageBot = ['Привет', 'Хай', 'Здравствуйте'];

const roundMatch = (max, min) => {  
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

bot.on('message', (msg) => {
    const { id, first_name } = msg.chat;

    if(/Привет/gi.test(msg.text)) {
        bot.sendMessage(id, `${arrMessageBot[roundMatch(2, 0)]} ${first_name}`);
    }
});