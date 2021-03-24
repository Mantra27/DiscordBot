const version = '1.3.1';
module.exports = {
    name: 'replymsg',
    description: "This Gives replymsg Info !!",
    execute(message, args){
        message.channel.send('Bot Will Reply On Your Msg According To Your Input Commands')
        message.channel.send('This Type Of command Set Includes *hello, *info, *code, *version, *help,');
        
    }
}