module.exports = {
  name: 'mode',
  description: 'Set bot mode',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command placeholder' }, { quoted: msg });
  }
};
