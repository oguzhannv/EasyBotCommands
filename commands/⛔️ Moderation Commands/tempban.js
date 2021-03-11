const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "tempban",
    aliases: ['tempban', 'temp'], // You Can Keep Any Name
    description: 'Temp bans A User.',  // Optional
    expectedArgs: '+tempban @User Time', // Optional

    run : async(client, message, args) => {

        const member = message.mentions.members.first()
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have enough perms to use this cmd!")

        if(!member) return  message.reply('Please Mention A User to Temp Ban.') //If User In Not Mentioned

        const time = args [1]
        if(!time) return message.reply('Specify Time to Temp Ban.') // If Time Is Not Provided

        await member.ban()

        const embed = new MessageEmbed()
        .setTitle('User Temp Banned')
        .setDescription(`<@${member.user.id}> Is Temp Banned for ${time}.`)
        .addField('Banned By:-', message.author)
        .setColor('YELLOW')
        message.channel.send(embed)

        // Unban A User After Time Is Finished
        setTimeout(async () => {
            await message.guild.members.unban(member)
            message.channel.send(`<@${member.user.id}> Has Been Unbanned After ${time} Of Ban.`)
        }, ms(time))

    }
    }