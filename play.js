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

// conn.on('connect', () => {
//   setTimeout(() => {
//   conn.write('Move: up');
//   }, 3000);
// });

console.log('Connecting ...');
connect();