module.exports = {
  name: 'sticker',
  description: 'Convert image to sticker',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Image/Sticker command placeholder' }, { quoted: msg });
  }
};
