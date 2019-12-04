const fs = require('fs');
// https://github.com/isaacs/node-glob
const glob = require('glob');

const output = {};

glob('src/data/*.json', (error, files) => {
    files.forEach((filename) => {
        const contents = JSON.parse(fs.readFileSync(filename, 'utf8'));
        var name = filename.replace(".json","").split("/").pop();
        output[name]=contents;
    });

    fs.writeFileSync('src/assets/data.json', JSON.stringify(output));
});
