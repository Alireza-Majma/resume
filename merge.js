var fs = require('fs');
var glob = require('glob');
// const fs = require('fs');
// https://github.com/isaacs/node-glob
// const glob = require('glob');
var output = {};
glob('src/data/*.json', function (error, files) {
    files.forEach(function (filename) {
        var contents = JSON.parse(fs.readFileSync(filename, 'utf8'));
        var name = filename.replace('.json', '').split('/').pop();
        output[name] = contents;
    });
    fs.writeFileSync('src/assets/data.json', JSON.stringify(output));
});
