module.exports = (sock) => {
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if(!msg.message) return;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    if(!text) return;

    // Check if command
    if(text.startsWith(require('../config').prefix)){
      const args = text.slice(1).trim().split(/ +/);
      const cmdName = args.shift().toLowerCase();
      const command = global.commands.get(cmdName);
      if(command) command.execute(msg, args, sock);
    }

    // AI auto-reply for personal chat
    if(!msg.key.remoteJid.endsWith('@g.us')){
      const reply = await require('../utils/functions').getAIReply(text);
      await sock.sendMessage(msg.key.remoteJid, { text: reply }, { quoted: msg });
    }
  });
};
