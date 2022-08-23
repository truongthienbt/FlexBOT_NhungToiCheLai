const { MessageEmbed, Client, ReactionUserManager } = require("discord.js")
const config = require("../../config.json")
const exec = require('child_process').exec
const CommandRoom = config.COMMANDROOM

module.exports = {
    name: 'stop',
    description: 'Stop All Attack',
    aliases: [''],
    cooldown: 5,
    async execute(client, message, args, Discord) {
        if (message.channel.id != CommandRoom) {
            return;
          }
        exec(`taskkill.exe /F /IM java.exe`, (error, stdout, stderr) => {
        })
        const embed = new MessageEmbed()
        .setTitle(`☂️ Stop All Attack ☂️`)
        .setDescription('Attack end!')
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(embed)
    }
}