process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require("node-telegram-bot-api");
const aesthetic = require("./aestheticfy");

require("dotenv").config();
const botToken = process.env.TELEGRAM_TOKEN;
const aestheticBot = new TelegramBot(botToken, {
  polling: true,
  filepath: false
});

aestheticBot.on("inline_query", e => {
  const aesthethicccedText = e.query.length
    ? aesthetic(e.query)
    : aesthetic("Type something!");
  const answer = [
    {
      type: "article",
      id: String(Math.floor(Math.random() * 10000000000)),
      title: aesthethicccedText("Click here to send AESTHETICS"),
      input_message_content: {
        message_text: aesthethicccedText,
        parse_mode: "Markdown"
      },
      description: aesthethicccedText
    }
  ];
  aestheticBot.answerInlineQuery(e.id, answer);
});

aestheticBot.on("polling_error", console.error);
