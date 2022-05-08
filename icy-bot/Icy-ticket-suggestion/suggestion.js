const Discord = require("discord.js");
const bot = new Discord.Client({ partials: ["MESSAGE", "USER", "REACTION"]});


let prefix = `!`;

    if (cmd === `${prefix}suggest`) {
        
        new Discord.MessageEmbed()
        .setColor('00ff00')
        .setTitle('Suggest')
        .setDescription('Your Suggestion has successfully been submitted');
        

    let channel;
    if(config.suggestion_channel_id){
      channel = await message.guild.channels.cache.get(config.suggestion_channel_id)
    } else channel = await message.guild.channels.cache.find(c => c.name == "suggestions" && c.type == "text");



    const suggestion = args.slice(0).join(" ")
      if(!suggestion){
        return message.channel.send(`${message.client.emoji.fail} | You need to suggest something!`)
      };
    

    const embed = new Discord.MessageEmbed()
    .setTitle('New Suggestion')
    .setDescription(`\`\`\`\n${suggestion}\`\`\``)
    .setFooter(`Suggested by ${message.author.tag}`)
    .setTimestamp()
  
    channel.send(embed)
    .then((s)=>{

    s.react('✅')
    s.react('❌')

    })

}
