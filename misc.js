module.exports = {
  name: 'heart',
  description: 'Misc fun command',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: '❤️' }, { quoted: msg });
  }
};
