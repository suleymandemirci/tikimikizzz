const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const moderasyongünlüğü = [
  '**»** XoseBOT sunucunuza eklendi!',
  '**»** XoseBOT , sunucunuzdaki insanlara kolaylıklar sağlar.',
  '**»** Bot Goorg#7851 tarafından geliştirilmektedir..',
  '**»** Botumuzun özelliklerini öğrenmek için x!yardım komutunu kullanabilirsin.',
  '**»** NOT: Botun kullanması için "moderasyon-günlüğü ve girenler-çıkanlar" adlı kanalı açın ve deneme için',
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(moderasyongünlüğü);
})