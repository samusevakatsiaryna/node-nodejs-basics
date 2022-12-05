import {Transform, pipeline} from 'stream';

const reverseText = (string) => {
    const isNotReversible = string.length < 2;
    return isNotReversible ? '' : string.split('').reverse().join('');
};

const readable = process.stdin;
const writable = process.stdout;

const transform = async () => {
    const transformString = new Transform({
        transform(chunk, encoding, callback) {
            const data = chunk.toString();
            const reversedChunk = reverseText(data);
            this.push(reversedChunk);
            callback();
        },
    });

    pipeline(readable, transformString, writable, (e) => {
        writable.write('Transform operation failed');
    });
};

await transform();