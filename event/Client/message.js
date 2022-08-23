const { Collection } = require('discord.js')
const config = require('../../config.json')
const CommandRoom = config.COMMANDROOM

const cooldowns = new Map()


module.exports = (Discord, client, message) => {
    const PREFIX =  config.PREFIX
    if(!message.content.startsWith(PREFIX) || message.author.bot) return
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd) || 
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd))

    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection())
    }

    const cooldownTimes = Date.now()
    const timeStamps = cooldowns.get(command.name)
    const cooldownAmounts = (command.cooldown) * 1000;

    if(timeStamps.has(message.author.id)){
        const exprirationTimes = timeStamps.get(message.author.id) + cooldownAmounts

        if(cooldownTimes < exprirationTimes){
            const timeLeft = (exprirationTimes - cooldownTimes) / 1000;

            
                return message.channel.send(`CoolDowns; ${timeLeft.toFixed(1)} giay`)
        }
    }

    timeStamps.set(message.author.id, cooldownTimes)

    try {
        command.execute(client, message, args, Discord, cmd)
    } catch (err) {
        message.channel.send("There command is error!")
        console.log(err)
    }
}