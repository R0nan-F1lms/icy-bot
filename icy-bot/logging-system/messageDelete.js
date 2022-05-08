const { MessageEmbed, Message,WebhookClient } = require("discord.js");

module.exports = {
    name:"messageDelete",
    execute(message) {
    /**
     * @param {Message} message
     */
        if(message) {
            if(message.author.bot) return;
            
            const Log = new MessageEmbed()
        .setColor("#000000")
        .setDescription(`📘 A [message](${message.url}) by ${message.author} was **Deleted**.\n **Deleted Message**:\n ${message.content ? message.content : "None"}`).slice(0, 4096);

        if(message.attachments.size >= 1){
            log.addField(`Attachments:`, `${message.attachments.map(a => a.url)}`, true)
        }
    

        new WebhookClient({url: "//Post link of webhook here"}
        ).send({embeds: [Log]}).catch((err) =>  console.log(err));
        

        }
    }
}