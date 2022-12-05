import path from 'path'; //const path = require('path');
import { release, version } from 'os'; // const { release, version } = require('os');
import { createServer } from 'http'; // const { createServer: createServerHttp } = require('http');
//import config3 from "./files/c" //require('./files/c');
import config from './files/a.js';
import config2 from './files/b.js'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = config; //require('./files/a.json');
} else {
    unknownObject = config2; //require('./files/b');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3001;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

