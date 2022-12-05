import { createHash } from 'node:crypto';
import * as fs from 'node:fs';

const calculateHash = async () => {
    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        console.log(createHash('sha256').update(data).digest('hex'));
    });
};

await calculateHash();