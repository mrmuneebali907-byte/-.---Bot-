module.exports = {
  name: 'ban',
  description: 'Ban a user in group',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Ban command placeholder' }, { quoted: msg });
  }
};
