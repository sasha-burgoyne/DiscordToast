const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	const toastedUser = args.shift();

	if (command === 'toast') {
		// const taggedUser = message.mentions.users.first();
		// if (!message.mentions.users.size) {
		// 	return message.channel.send(`Hey ${message.author}! You didn't provide anything to toast :(`);
		// }
		const channel = client.channels.cache.get('770262534221201429');
		channel.send(`${message.author} toasted ${toastedUser} \n${args.join(' ')}`);
	}
});

// login to Discord with your app's token
client.login(token);
