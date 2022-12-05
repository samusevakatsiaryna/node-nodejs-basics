import * as fs from 'node:fs';
import {createGunzip} from 'zlib';

const decompress = async () => {

    const readStream = fs.createReadStream('./src/zip/files/archive.gz');
    const writeStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt');

    readStream
        .pipe(createGunzip())
        .pipe(writeStream)
        .on('finish', () => {
            process.stdout.write(
                'File is decompressed'
            );
        });
};

await decompress();