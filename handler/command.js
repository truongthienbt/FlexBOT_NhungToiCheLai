const fs = require("fs")
const { readdirSync } = require('fs')

module.exports = (client, Discord) => {
    let count = 0;
    readdirSync('./command').forEach(dir => {
        const commands = readdirSync(`./command/${dir}/`).filter(file => file.endsWith(".js"))
        for (const file of commands) {
            const pull = require(`../command/${dir}/${file}`)
            if (pull.name) {
                count++
                client.commands.set(pull.name, pull);
            } else {
                continue
            }
        }
    })
    console.log(`Commands: ${count}`)
}