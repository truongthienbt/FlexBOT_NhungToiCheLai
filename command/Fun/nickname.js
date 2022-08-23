const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'nickname',
    description: 'Rename player in your server',
    aliases: [''],
    cooldown: 3,
    async execute(client, message, args, Discord) {
        if (!message.member.hasPermission('CHANGE_NICKNAME')) return message.channel.send(`You dont have permission`)
        if (!message.guild.me.hasPermission('CHANGE_NICKNAMES')) return message.channel.send(`I dont have permission`)

        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const nickname = args.slice(1).join(" ")

        if(!args[0]) return message.channel.send("You have to tag someone")
        if(!mentionMember) return message.channel.send('That person is currently not on the server')
        if(!nickname) return message.channel.send(`You have to state something for that player to change his name`)
        if(!mentionMember.kickable) return message.channel.send(`I don't have permission to change my name please give me permission to use this command`)

        await mentionMember.setNickname(nickname).catch(err => console.log(err) && message.channel.send('This Name is error'))
    }
}