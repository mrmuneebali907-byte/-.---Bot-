module.exports = {
  name: 'play',
  description: 'Download song',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Downloader command placeholder' }, { quoted: msg });
  }
};
