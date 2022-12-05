const parseEnv = () => {
    const processVars = process.env;
    let varsArray = [];

    for (let key in processVars) {
        if (key.startsWith('RSS_')) {
            varsArray.push(key + '=' + processVars[key]);
        }
    }
    console.log(varsArray.toString().replaceAll(',', '; '));
};

parseEnv();