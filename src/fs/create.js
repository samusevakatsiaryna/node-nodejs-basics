import * as fs from 'node:fs';

const create = async () => {
    // Write your code here 
    try {
        const data = 'I am fresh and young';
        fs.writeFileSync('./src/fs/files/fresh.txt', data, {flag: 'wx'});
    } catch (e) {
        throw new Error("FS operation failed");
    }
};

await create();