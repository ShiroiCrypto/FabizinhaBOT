// => Status: Sistema de Informações no Console.
const client = require("../../index");
const Discord = require('discord.js');

client.on(`ready`, () => {
  console.clear()
  console.log(`👻  | Bot logado com sucesso em ` + client.user.username + `
👻  | Bot conectado a DataBase (SayV14)
👻  | Desenvolvido por (Shiroi)`);
});

// => Client: Sistema de Status do Bot.

client.on("ready", () => {
  const messages = [
    `🌸 Oi, eu sou a ${client.user.username}! 😄`, // Status 1
    `🌟 Estou em ${client.guilds.cache.size} servidores, que legal! 🎉`, // Status 2
    `💖 Com mais de ${client.users.cache.size} amigos incríveis! ✨`, // Status 3
  ]

  var position = 0;

  setInterval(() => client.user.setPresence({
    activities: [{
      name: `${messages[position++ % messages.length]}`,
      type: Discord.ActivityType.Streaming,
      url: 'https://www.twitch.tv/TwitchStatusServer'
    }]
  }), 1000 * 10);

  client.user.setStatus("online");
});