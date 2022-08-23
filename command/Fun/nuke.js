module.exports = {
    name: 'nuke',
    description: 'Reset your room',
    aliases: [''],
    cooldown: 10,
    async execute(client, message, args, Discord) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("You dont have permission!")
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`Your role is dont have Permission`)

        let reason = args.join(" ")
        const nukeChannel = message.channel

        if (!reason) reason = "No reason given."
        if (!nukeChannel.deletable) return message.channel.send("This channel is not deletable")

        await nukeChannel.clone().catch(err => console.log(err))
        await nukeChannel.delete().catch(err => console.log(err))
    }
}