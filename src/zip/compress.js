import * as fs from 'node:fs';
import {createGzip} from 'zlib';

const compress = async () => {

    const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./src/zip/files/archive.gz');

    readStream
        .pipe(createGzip())
        .pipe(writeStream)
        .on('finish', () => {
            process.stdout.write(
                'File is compressed'
            );
        });
};

await compress();