module.exports = {
  name: 'ping',
  description: 'Ping command',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Pong ✅' }, { quoted: msg });
  }
};
