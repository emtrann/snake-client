const net = require('net');
const { connect } = require ('./client.js')

const conn = net.createConnection({ 
  host: 'localhost',
  port: 50541
});

/**
 * Establishes connection with the game server
 */

conn.on('connect', () => {
  conn.write('Name: MT3');
});




const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  return stdin;
}
// conn.on('connect', () => {
//   setTimeout(() => {
//   conn.write('Move: up');
//   }, 3000);
// });

console.log('Connecting ...');
connect();
setupInput();