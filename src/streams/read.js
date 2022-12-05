import * as fs from 'node:fs';

const read = async () => {

    const pathToFile = './src/streams/files/fileToRead.txt';
    let readStream = fs.createReadStream(pathToFile);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('close', () => {
        console.log("Stream is finished");
    });
};

await read();