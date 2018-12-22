const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '#test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
});


client.login(process.env.NTI1NjE4OTkyMDU3MDI0NTIy.DwAp3g.DvsHwLBnFRpjKSyQaYpdRq-sw); 
client2.login(process.env.NTI1NjE5NDIzMzgyMzM5NTg1.DwAp6Q.teRD9zwE5vdkZeXaLr4d3iUY4fo2); 
client3.login(process.env.BOT_NTI1NjE5NjYxOTUwMjg3ODky.DwAp8w.5Ipdk0XpGxf9ByTKoGK0RWTsM9Y3); 
client4.login(process.env.NTI1NjE5OTA1MDIyNzg3NTk1.DwAp-w.IBDGM1M-GixIxWtZBOxRMeKfpGs4); 
