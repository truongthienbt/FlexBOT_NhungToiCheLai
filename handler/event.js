const fs = require("fs")

module.exports = (client, Discord) => {
    let count = 0;
    const load_dir = (dir) => {
        const eventFiles = fs.readdirSync(`./event/${dir}`).filter(file => file.endsWith(".js"))

        for (const file of eventFiles) {
            count++
            const event = require(`../event/${dir}/${file}`)
            const eventNames = file.split('.')[0]
            client.on(eventNames, event.bind(null, Discord, client))
        }
    }

    ['Client', 'Guild'].forEach(e => load_dir(e));
    console.log(`Event: ${count}`)
} 