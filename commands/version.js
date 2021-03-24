const version = '1.4.4';
module.exports = {
    name: 'version',
    description: "This Gives Version Info !!",
    execute(message, args){
        message.channel.send('Version: '+version);
        message.channel.send('❄️: Last Updated On 4 Nov');
        message.channel.send('🔥:What`s New: ');
        message.channel.send('❄️: Added New Audio Commands- *kadamdi, *gandmegoli')
        
        
    }
}