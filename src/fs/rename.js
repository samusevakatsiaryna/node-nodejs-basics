import * as fs from 'node:fs';

const rename = async () => {
    if (fs.existsSync('./src/fs/files/properFilename.md')) throw new Error("FS operation failed");
    fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await rename();