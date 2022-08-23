const config = require("../../config.json")
const CommandRoom = config.COMMANDROOM

module.exports = {
    name: 'ping',
    description: 'Ping BOT',
    aliases: ['p'],
    cooldown: 6,
    async execute(client, message, args, Discord) {
        if (message.channel.id != CommandRoom) {
            return;
          }

        message.channel.send(`Ping: ${client.ws.ping}`)
    }
}