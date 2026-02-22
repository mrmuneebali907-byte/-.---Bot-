module.exports = {
  name: 'tictactoe',
  description: 'Start TicTacToe game',
  execute: async(msg, args, sock) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'TicTacToe command placeholder' }, { quoted: msg });
  }
};
