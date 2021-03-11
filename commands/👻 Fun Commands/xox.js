const { tictactoe } = require('reconlx')
const config = require("../../config.json")
module.exports = {
    name : 'xox',
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}