// Main bot loader
const { default: makeWASocket, useSingleFileAuthState } = require('@adiwajshing/baileys');
const fs = require('fs');
const { botName, prefix, ownerName, ownerNumber } = require('./config');

// Load commands dynamically
global.commands = new Map();
fs.readdirSync('./commands').forEach(file => {
  if(file.endsWith('.js')){
    const command = require(`./commands/${file}`);
    global.commands.set(command.name, command);
  }
});

// Load events
require('./events/message')();
require('./events/group')();

console.log(`${botName} v3.0.5 loaded by ${ownerName}`);
