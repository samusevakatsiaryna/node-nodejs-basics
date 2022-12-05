import { readdir } from 'node:fs/promises';
import Path from 'path';
import * as fs from 'node:fs';

const list = async () => {
    if (!fs.existsSync('./src/fs/files')) throw new Error("FS operation failed");
    let filesArray = [];
    const files = await readdir('./src/fs/files/');
        for (const file of files) {
            filesArray.push(Path.basename(file));
        }
        console.log(filesArray)
};

await list();