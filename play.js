const { connect } = require('./client.js'); 
const { setupInput } = require('./input.js');

// conn.on('connect', () => {
//   setTimeout(() => {
//   conn.write('Move: up');
//   }, 3000);
// });

console.log('Connecting ...');
setupInput(connect());
