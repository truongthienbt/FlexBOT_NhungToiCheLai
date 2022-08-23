const config = require("../../config.json")

module.exports = {
    name: 'caculatar',
    description: 'Open caculator',
    aliases: ['maytinh'],
    cooldown: 5,
    async execute(client, message, args, Discord) {
        const firstValue = Number(args[0])
        const secondValue = Number(args[2])

        if(!args[0]) return message.channel.send(`VD: ${config.PREFIX}maytinh \`[number] [+, -, x, /] [number]\``)
        if(!firstValue) return message.channel.send(`It's í not number`)
        if(!args[1]) return message.channel.send(`You must specify what you want to do with these numbers`)
        if(!['+', '-', 'x', '/'].includes(args[1])) return message.channel.send(`VD: ${config.PREFIX}maytinh \`[number] [+, -, x, /] [number]\``)
        if(!secondValue) return message.channel.send(`It's is not a number`)

        if (args[1] == '+') {
            let result = firstValue + secondValue
            message.channel.send(`${firstValue} + ${secondValue} = ${result}`)
        }
        if (args[1] == '-') {
            let result = firstValue - secondValue
            message.channel.send(`${firstValue} - ${secondValue} = ${result}`)
        }
        if (args[1] == 'x') {
            let result = firstValue * secondValue
            message.channel.send(`${firstValue} x ${secondValue} = ${result}`)
        }
        if (args[1] == '/') {
            let result = firstValue / secondValue
            message.channel.send(`${firstValue} : ${secondValue} = ${result}`)
        }
        
    }
}