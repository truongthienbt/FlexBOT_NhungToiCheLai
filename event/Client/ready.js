module.exports = (Discord, client, message) => {
    console.log(`BOT STARTED`) 
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: `${client.guilds.cache.size} server!`,
            type: 'WATCHING',
            url: ''
        }
    })
}