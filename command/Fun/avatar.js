const config = require('discord.js')
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'avatar',
    description: 'Avatar user',
    aliases: ['av', 'avt'],
    cooldown: 5,
    async execute(client, message, args, Discord) {
        const mentionMember = message.mentions.members.first() || message.guild.cache.get(args[0])
        if(!mentionMember) mentionMember = message.member;

        const embed = new MessageEmbed()
        .setTitle(`Avatar ${mentionMember.user.tag}:`)
        .setImage(mentionMember.user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setTimestamp()
        message.channel.send(embed)
    }
}