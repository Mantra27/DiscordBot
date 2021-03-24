const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const token = 'NzY4MDg3ODQ4OTA4NzUwODU5.X47XjQ.kUC8MIElNNLunc9vT5pOn-JyZD4';
const prefix = '*';
const link = 'https://discord.gg/FCXDYPc';
const version = '1.4.4';
const embedlistregular = new Discord.MessageEmbed()                       //............................List Of Regular Commands....
    .setColor('GREEN')
    .setTitle('🍁List of Regular Commands:')
    .setDescription(`Regular Commands: *hello, *info, *code, *version, *help, *link,`)

const embedlistaudio = new Discord.MessageEmbed()                       //.............................List Of Audio Commands....

    .setColor('GREEN')
    .setTitle('🍁List of Voice Chat(Audio) Commands:')
    .setDescription(`*kadamdi, *gandmegoli, *rajni, *neta, *diwali *meow, *fursat, *yo, *robert, *ohh`)

const embedlistgif = new Discord.MessageEmbed()                         //.............................List Of GIF Commands....

    .setColor('GREEN')
    .setTitle('🍁List of GIF Commands:')
    .setDescription(`*popcorn, *mantra, *huh?, *lol, *nyan, *blob, *parrot`)

//All Things Under This line Is For Multiple javasciepts.......................
const author = require('./commands/author');
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
//above..........................................................................

client.once('ready', () => {
    console.log('Bot is online !')
    client.user.setActivity('Mirzapur S2 😚',{type:'WATCHING'});             //.........................Bot Status....
});
    
client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
       message.reply('Hi There !!');
    }
    else if(command === 'bsdk'){
       message.reply('Tmkc !!😒 <:crycat:771651706059751484>');
    }
    else if(command === 'info'){
        message.channel.send('I Am A Discord Bot, Mantra Coded Me 😙');
        message.channel.send('Version: '+version);
        message.channel.send(embedlistregular);
        message.channel.send(embedlistaudio);
        message.channel.send(embedlistgif);
    }
    else if(command === 'link'){
        message.channel.send(link);
    }
    else if(command === 'sourcecode'){
        const jscode = new attachment('/.main.js');
        message.channel.send(message.author, jscode);
    }
    else if(command === 'maketxt'){
        if(!args[0]) return message.reply('You Have To Enter Text Content That You Want To Add In.');
        if(!args[1]) return message.reply('Pls Add File Name After Your msg');
        const datacont = args[1];
        const contname = args[2]; 
        fs.writeFile( contname + ".txt", datacont, (err) => { 
            if (err) throw err; 
        })
        message.reply("File") 
        
    }
    else if(command === 'clear'){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You Cant Clear Chat');
        if(!args[0]) return message.reply('You Forgot To Enter How Many Messages To Clear');
        if(args[0]>99) return message.reply('Somry, You Cannot Delete More Than 99 Messages...')
        if(args[0]<0) return message.reply(`Lmao, You Tried To Delete Minus ${args[0]} Messages`)
        if(args[0]==0) return message.reply('You Just Tried To Delete 0 Messages, Big Brain')

            message.channel.bulkDelete(parseInt(args[0])+1).then(() => {
            message.channel.send(`Cleared ${args[0]} Messages...`);
            }).catch((err) =>{
                return message.channel.send(`${err}`);
    })
    }
    else if(command === 'version'){
        client.commands.get('version').execute(message, args);
    }
    else if(command === 'code'){
        if(!args[0]) return message.reply('Invalid Code');
        message.channel.send('@everyone Join Fast Code Is....... <:among_us:771651704499601431>' )
        message.channel.send({embed: {title: 'Code:', color: "GREEN", description: `${args[0]}`}});
    
    }
    else if(command === 'react'){
        message.react('💩');
    }
    else if(command === 'ter'){
        if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send({embed: {color: "RED", description: "You can't Shut Me Down, You Must Have Administration Permission"}})
          }
        console.log('Bot Terminated');
        process.exit();        
    }
    else if(command === 'help'){
        const des = `
        ☄️ *help author
        ☄️ *help replymsg
        ☄️ *help ter   
        `

        if (!args[0]){ 
            return message.reply({embed: {title: "❓Ｈｅｌｐ❓", color: "BLUE", description: '...How To Operate'+des}});
        }
        else if(args[0] === 'author'){
            client.commands.get('author').execute(message, args);
        }
        else if(args === 'replymsg'){
            client.commands.get('replymsg').execute(message, args);
        }
        else if(args[0] === 'ter'){
            client.
            commands.get('ter').execute(message, args);
        }   
        else{
            message.channel.send({embed: {title: "❓Ｈｅｌｐ❓", color: "BLUE", description: '...How To Operate'+des}})
        }      
    }
    else if(command === 'mantra'){
        const mant ='<@610432757113421834>';
        const attachment = new Discord.MessageAttachment('./images/mantra.gif');
                const embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription('<@610432757113421834> Coding Me Be Like:')
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    
    else if(command ==='lol'){
        if(!args[0]){
            return message.reply(`Whom You're Targetting? Enter Valid Name or Mention`)
        }
        const attachment = new Discord.MessageAttachment('./images/lol.gif');
                const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`hehehe LOL ${args[0]}`)
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    else if(command === 'popcorn'){
      
        const attachment = new Discord.MessageAttachment('./images/popcorn.gif');
                const embed = new Discord.MessageEmbed()
                .setTitle(`Yo, Take Some Pop's`)
                .setColor('YELLOW')
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    else if(command === 'blob'){
      
        const attachment = new Discord.MessageAttachment('./images/party_blob.gif');
                const embed = new Discord.MessageEmbed()
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    else if(command === 'parrot'){
      
        const attachment = new Discord.MessageAttachment('./images/party_parrot.gif');
                const embed = new Discord.MessageEmbed()              
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    else if(command === 'nyan'){
      
        const attachment = new Discord.MessageAttachment('./images/nyancat_big.gif');
                const embed = new Discord.MessageEmbed()
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    else if(command === 'huh'){
        if(!args[0]){
            return message.reply(`Whom You're Targetting? Enter Valid Name or Mention`)
        }
        const attachment = new Discord.MessageAttachment('./images/obama.gif');
                const embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription(`Dude , Really ?? ${args[0]}`)
                .attachFiles(attachment)
                .setImage('attachment://sample.png');
                 message.channel.send({embed});
    }
    
    else if(command === 'nicknamehelp'){
        message.channel.send(`To Access *nickname command You Have To Command me in this flow--> *nickname  <Mention Target>  <nickname> `)
    } 

    else if(command === 'nickname'){
        if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
          }
          
          let user = message.mentions.users.first(); // You can mention someone, not only just user.
          if (!user) return message.channel.send({embed: {color: "RED", description: "You need to mention the user!"}});
          
          let nick = args.slice(1).join(" ");
          if (!nick) return message.reply('You Didnt Mentioned TheUser');
          
          let member = message.guild.members.cache.get(user.id);
          
          member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}));
          return message.channel.send({embed: {color: "GREEN", description: `Successfully changed **${user.tag}** nickname to **${nick}**`}});
    
    }

    else if(command === 'meow'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/meow.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'fursat'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/pelhi.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'yo'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/yooo.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'rajni'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/rajni.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'robert'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/robert.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'kadamdi'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/kadamdi.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'gandmegoli'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/gandmegoli.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'ohh'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/ohh.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'neta'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/netaneta.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'diwali'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/diwali.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    else if(command === 'assist'){
        var VC = message.member.voice.channel;
        if(!VC){
            return message.reply("You Must Be in Voice Channel To Use This Command...");
        }
        VC.join()
        .then(connection => {
            const dispatcher = connection.play('./audio/assist.mp3');
            dispatcher.on("end",end => {VC.leave()});
        })
        .catch(console.error);
    }
    
    

    //To Terminate cmd line From DC:
    else {
        message.channel.send('I Am Learning More Currently Use Only => ')
        message.channel.send(embedlistregular);
        message.channel.send(embedlistaudio);
        message.channel.send(embedlistgif);
    }

});

client.login(token);