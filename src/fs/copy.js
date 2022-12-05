import { readdir } from 'node:fs/promises';
import Path from 'path';
import * as fs from 'node:fs';

const copy = async () => {
    let currentDir = './src/fs/files/';
    let targetDir = './src/fs/files_copy/' 
    let fileBaseName;
    try {
        const files = await readdir('./src/fs/files');
        if (fs.existsSync(targetDir)) throw new Error("FS operation failed");
        if (!fs.existsSync(currentDir)) throw new Error("FS operation failed");
        fs.mkdirSync(targetDir);

        for (const file of files) {
            fileBaseName = Path.basename(file);
            const currentPath = currentDir + fileBaseName;
            const targetPath = targetDir + fileBaseName;
            fs.copyFile(currentPath, targetPath, (err) => {
                if (err) {
                    throw new Error("FS operation failed")
                }}
            );
        }
        
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

copy();