const version = '1.2.3';
module.exports = {
    name: 'version',
    description: "This Gives Version Info !!",
    execute(message, args){
        message.channel.send('Version: '+version);
        message.channel.send('What`s New: ');
        message.channel.send('☄️: Last Updated On 27 Oct');
        message.channel.send('☄️: Now I Shintu Can Change Nicknames By Using *nickname Command !!!(For Help Use *nicknameHelp)');
    }
}