import * as fs from 'node:fs';

const write = async () => {
    
    let filePath = './src/streams/files/fileToWrite.txt';
    let writeStream = fs.createWriteStream(filePath, 'utf8');
    //console.log(process.stdin);

    process.stdin.on('data', (chunk) => {
        const data = chunk.toString();
        writeStream.write(data);
    });
};

await write();