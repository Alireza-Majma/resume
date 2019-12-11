import * as fs from 'fs';
import * as glob from 'glob';
import * as jexiaSDK from 'jexia-sdk-js/node';
import { Client, IFilteringCriterion, field } from 'jexia-sdk-js/node';
import { ICondition } from 'jexia-sdk-js/api/core/filteringCondition';
import { async } from 'q';
// const fs = require('fs');
// https://github.com/isaacs/node-glob
// const glob = require('glob');
const dataModule = jexiaSDK.dataOperations();
const output = {};
const credentials = {
  "projectID": 'e4158913-ef39-4731-ade9-b8da5d9ae283',
  "key": "39bb377f-285e-4356-9836-db01a7e1642c",
  "secret": "QsfPG5BpqVIYw1HTzGm+1z8iuR7fR+JlgN1dS6GAyHBOFvHmq1u71KNyPxCT2KlTkLlpjU6sghgojRrzggN1dw--"
};

function selectInfo(dsName: string) {
  let client: jexiaSDK.Client;
  return jexiaSDK.jexiaClient().init(credentials, dataModule)
    .then((x) => {
      console.log('after init');
      client = x;
      dataModule.dataset(dsName)
        .select()
        .execute()
        .then(records => console.log(JSON.stringify(records)))
        .then(() => client.terminate())
        .catch(error => console.error('Something wrong happened:', error));
    });
}


async function insertInfo(dsName: string, data: object[]) {
  let client: jexiaSDK.Client;
  return await jexiaSDK.jexiaClient().init(credentials, dataModule)
    .then((x) => {
      client = x;
      dataModule.dataset(dsName)
        .insert(data)
        .execute()
        // .then(records => console.log(JSON.stringify(records)))
        .then(records => console.log('insert recorde for: ' + dsName))
        .then(() => client.terminate())
        .catch(error => console.error('Something wrong happened: in insert records for :' + name, error));
    });
}

async function deleteInfo(dsName: string) {
  let client: jexiaSDK.Client;
  return await jexiaSDK.jexiaClient().init(credentials, dataModule)
    .then((x) => {
      client = x;
      const filter = field('id').isNotInArray(['796cc9a8-2973-4bfb-b7b9-b13a84bbcdd4']);

      dataModule.dataset(dsName)
        .delete()
        .where(filter)
        .execute()
        // .then(records => console.log(JSON.stringify(records)))
        .then(records => console.log('delete recorde for: ' + dsName))
        .catch(error => console.error('Something wrong happened: in delete records for :' + name, error));
    });
}

glob('src/data/*.json', (error, files) => {
  let timer = 0;
  files.forEach((filename) => {
    const contents = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const name = filename.replace('.json', '').split('/').pop();
    console.log(name);
    output[name] = contents;
    // if (name === 'tool_info') {
    console.log('update:', name);
    setTimeout(() => deleteInfo(name) , timer * 1000);
    timer = timer + 3;
    setTimeout(() => insertInfo(name, contents) , timer * 1000);
    timer = timer + 3;
  });

  fs.writeFileSync('src/assets/data.json', JSON.stringify(output));
});

// jexiaSDK.jexiaClient().init(credentials, dataModule);

// dataModule
//   .dataset('tool_info')
//   .select()
//   .execute()
//   .then(records => console.log(JSON.stringify(records)))
//   .catch(error => console.error('Something wrong happened:', error));


// dataModule
//   .dataset('tool_info')
//   .insert([{ title: '1111111111111', url:'https://caniuse.com/', def: '33333333333333' }])
//   .execute()
//   .then(records => console.log(JSON.stringify(records)))
//   .catch(error => console.error('Something wrong happened:', error));







