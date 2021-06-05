const Discord = require('discord.js');
const client = new Discord.Client();

const  prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('connecté protectrice de Nawiss', msg => {
  if (msg.content === '!heyllo ') {
    msg.reply('derien');
  }
});

client.login(process.env.token);
