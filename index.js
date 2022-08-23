const { Client, Intents, Collection } = require("discord.js")
const { TOKEN, MONGODB_URL } = require("./config.json")
const Discord = require("discord.js")
const mongoose = require("mongoose")

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION', 'USER']});

client.commands = new Collection();
client.events = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler=> {
    require(`./handler/${handler}`)(client, Discord)
})

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Database is connect`)
}).catch((err) => {
    console.log(err)
})

client.login(TOKEN)