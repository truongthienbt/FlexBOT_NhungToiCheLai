const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch')

module.exports = {
    name: 'meme',
    description: 'Meme random',
    aliases: [''],
    cooldown: 5,
    async execute(client, message, args, Discord) {
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(async json => {
            const embed = new MessageEmbed()
            .setTitle('Meme: ')
            .setImage(json.url)
            .setFooter(`${json.subreddit} ${json.postLink}`)

            let msg = await message.channel.send(`Meme loading....`)
            msg.edit(embed)
        })
    }
}