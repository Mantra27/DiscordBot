const { Message } = require("discord.js");

module.exports.run = async (bot, message, args) => {    

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You Cant Clear Chat');
    if(!args[0]) return message.reply('Pls Enter Valid Ammount..');

    message.channel.bulkDelete(parseInt(args[0])+1).then(() => {
        message.channel.send(`cleared ${args[0]} Messages...`);
    }).catch((err) =>{
        return message.channel('oops error');
    })

}