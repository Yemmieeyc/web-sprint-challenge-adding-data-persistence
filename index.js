// start your server hererequire('dotenv').config()
require('dotenv').config()
const server = require('./api/server.js');

const port = process.env.PORT ;

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

