const Discord = require("discord.js");
//チケット
client.on('messageCreate', async message => {
  if (message.channel.id === '1170950076517056522') {
   if (message.author.bot) return;  
   // message.channel.send("").catch(console.error);
    message.guild.channels.create({
      name: message.author.username+"のチケット",
      topic: message.author.id,
      parent: message.channel.parent
     })
  }
});
const client = new Discord.Client({ 
  intents: 
  Object.values(Discord.GatewayIntentBits) 
  }) 

client.on('messageCreate', async message => {
   if (message.channel.parent.id === '1170949980765294592') {
   if (message.channel.id === '1170950076517056522') return;  
  if(message.content == ('tm.close')){
    if (message.author.id === '1077534771476975656'||message.author.id === message.channel.topic) {
      message.channel.delete(message.author.username+"によるコマンド");
        
  }
  }
   }
});

client.on('channelCreate', async chat => {
   if (chat.parent.id === '1170949980765294592') {

  const usercontact = chat.topic
    chat.permissionOverwrites.edit(usercontact, {
      ViewChannel: true
      })
     chat.send({embeds: [
                 {
                    title: "チケットへようこそ。",
                   color: 0x0B5EE3,
                   description: "ようこそ！チケットを作成しました。\nチケットを閉じるには、`tm.close`を入力して下さい。",
                    timestamp: new Date(),
                 },
               ]})
   }
}
);
