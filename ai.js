module.exports = {
  name: 'gpt',
  description: 'AI reply command',
  execute: async(msg, args, sock) => {
    const reply = await require('../utils/functions').getAIReply(args.join(' '));
    await sock.sendMessage(msg.key.remoteJid, { text: reply }, { quoted: msg });
  }
};
