const net = require('net');
const { connect } = require ('./client.js')

/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
connect();