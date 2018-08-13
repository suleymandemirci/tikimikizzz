module.exports = member => {
  const channel = member.guild.channels.find('name', 'giris-cikis');
  if (!channel) return;
  channel.send(`**»** ${member} Sunucudan çıkış yaptı!`);
};