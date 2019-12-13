import * as fs from 'fs';
import * as glob from 'glob';
import * as jexiaSDK from 'jexia-sdk-js/node';
import { Client, IFilteringCriterion, field } from 'jexia-sdk-js/node';
import { ICondition } from 'jexia-sdk-js/api/core/filteringCondition';
import { async } from 'q';
import { from, Subject, pipe, of, Observable, concat, empty } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { mergeMap, delay, tap, map, first, startWith, endWith } from 'rxjs/operators';
import * as util from 'util';
import { promise } from 'selenium-webdriver';



const dataModule = jexiaSDK.dataOperations();
const output = {};
const credentials = {
  'projectID': 'e4158913-ef39-4731-ade9-b8da5d9ae283',
  'key': "39bb377f-285e-4356-9836-db01a7e1642c",
  'secret': "QsfPG5BpqVIYw1HTzGm+1z8iuR7fR+JlgN1dS6GAyHBOFvHmq1u71KNyPxCT2KlTkLlpjU6sghgojRrzggN1dw.=="
};


function loadData() {
  glob('src/data/*.json', (error, files) => {
    let client: jexiaSDK.Client;
    let p = jexiaSDK.jexiaClient().init(credentials, dataModule)
      .then(c => { client = c; return [] as any[]; });
    files.forEach(filename => {
      const contents = JSON.parse(fs.readFileSync(filename, 'utf8'));
      const dsName = filename.replace('.json', '').split('/').pop();
      output[dsName] = contents;
      p = p.then(_ => {
        const filter = field('id').isNotInArray(['796cc9a8-2973-4bfb-b7b9-b13a84bbcdd4']);
        console.log('delete :', dsName);
        return dataModule.dataset(dsName)
          .delete()
          .where(filter)
          .execute();
      }).then(_ => {
        console.log('insert :', dsName);
        return dataModule.dataset(dsName)
          .insert(contents)
          .execute();
      });
    });
    p.then(_ => client.terminate())
    fs.writeFileSync('src/assets/data.json', JSON.stringify(output));
  });
}
loadData();



