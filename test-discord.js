const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel]
});
console.log('Testing Discord login...');
client.on('ready', () => {
    console.log('Logged in successfully as', client.user.tag);
    process.exit(0);
});
client.on('error', err => {
    console.error('Discord error event:', err);
    process.exit(1);
});
client.login('MTQ3NzM5MDQ3ODcyNjAwODg3Mw.GbzgnQ.ppVjGz8zsXzgCKVG06gQ6pYZZHk7eHriKJdAAM').catch(err => {
    console.error('Login failed:', err);
    process.exit(1);
});
