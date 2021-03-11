const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
	aliases: ["add"],
    category: "🤖 Information Commands",
    description: "Invite the Bot to your Server",
    usage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setTitle("Invite BOT")
        .setDescription(`[<✔️819217975436509207> INVITE ME NOW, thanks](https://discord.com/oauth2/authorize?client_id=819217975436509207&scope=bot&permissions=0)
        `)
        .setFooter(client.user.username, config.AVATARURL)
        
        message.reply(inviteembed);
    }
}
