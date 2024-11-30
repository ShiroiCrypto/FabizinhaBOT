const { joinVoiceChannel } = require('@discordjs/voice');
const client = require(`../../index.js`);
const Discord = require("discord.js")

client.on("ready", () => {
  let canal = client.channels.cache.get("1312398957346947134") // coloque o ID do canal de voz"1312398957346947134"
  if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
  if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)

  try {

    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    })
    console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)

  } catch (e) {
    console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)
  }

})