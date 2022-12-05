const parseArgs = () => {
    // Write your code here 
    let argsArray = process.argv.slice(2);
    let formatedArgsArr = [];

    for (let i = 0; i < argsArray.length; i++) {
        if (argsArray[i].startsWith('--')) {
            formatedArgsArr.push(argsArray[i] + ' is ' + argsArray[i+1]);
        }
    }
    console.log(formatedArgsArr.toString().replaceAll(',', ', '));
};

parseArgs();