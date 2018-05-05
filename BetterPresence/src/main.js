//Success - "\x1b[32m"
//Warning - "\x1b[33m"
//Error - "\x1b[31m"
//Info - "\x1b[36m"

const fs = require('fs')
const os = require('os')
const DiscordRPC = require('discord-rpc')
console.log("\x1b[46m",'BetterPresence v0.2.0 by dnesov')
console.log("\x1b[0m","\x1b[34m",'Reading config file...')
console.log("\x1b[0m","\x1b[32m",'Config file readed succesfully!')

const configData = fs.readFileSync('config.txt', 'utf8');

const config = configData
  .split(os.EOL)
  .map(line => line.split('='))
  .reduce((acc, val) => {
    const configName = val[0].trim()
    const configValue = val[1].trim()
    acc[configName] = configValue
    return acc
  }, {})

console.log("\x1b[0m","\x1b[32m",'Presence is running! It is recommended to add this app in startup.');
//DISCORD RPC
DiscordRPC.register(config.clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  rpc.setActivity(config);
});

rpc.login(config.clientId).catch(console.error);
