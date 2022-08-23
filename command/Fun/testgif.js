const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'gif',
    description: 'Test GIF',
    aliases: [''],
    cooldown: 5,
    async execute(client, message, args, Discord) {
        const embed = new MessageEmbed()
        .setTitle("Test Gif")
        .setDescription('Test gif anime use in attack')
        .setImage('https://media2.giphy.com/media/4ilFRqgbzbx4c/giphy.gif?cid=ecf05e47stotu0eaid9qpfw6tcpdhgu8qdg7nqa8hhqjs8r2&rid=giphy.gif&ct=g')
        .setTimestamp()
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}