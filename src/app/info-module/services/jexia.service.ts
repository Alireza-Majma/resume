import { Injectable } from '@angular/core';
import { Client, jexiaClient, WebStorageComponent, IAuthOptions } from 'jexia-sdk-js/browser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, from, of } from 'rxjs';

export interface JexiaClient {
  getAccessToken: () => string;
}


@Injectable()
export class JexiaServiceFactory {
  private static instance: JexiaService;
  static readonly projectID = environment.jexia.projectID; // Your Project ID at Jexia
  static readonly key = environment.jexia.key; // Your API key at Jexia
  static readonly secret = environment.jexia.secret; // Your API secret at JEXIA

  constructor(
    // private http: HttpClient
  ) { }

  static options: IAuthOptions = {
    projectID: JexiaServiceFactory.projectID,
    key: JexiaServiceFactory.key,
    secret: JexiaServiceFactory.secret
  }


  static Init(): Observable<JexiaService> {
    if (!JexiaServiceFactory.instance) {
      JexiaServiceFactory.instance = new JexiaService();
    }

    if (JexiaServiceFactory.instance.storage) {
      return of(JexiaServiceFactory.instance);
    }

    return from(
      jexiaClient().init(JexiaServiceFactory.options)
        .then(x => {
          JexiaServiceFactory.instance.client = x;
          console.log('cliente', JexiaServiceFactory.instance);
          JexiaServiceFactory.instance.storage = new WebStorageComponent(true, window);
          // console.log('_jexiaService.getAccessToken', _jexiaService.getAccessToken());
          return JexiaServiceFactory.instance;
        })
        .catch(e => {
          console.log('error', e);
          return JexiaServiceFactory.instance;
        }));
  }

}


export class JexiaService {
  client: Client;
  storage: WebStorageComponent;
  readonly projectID = environment.jexia.projectID; // Your Project ID at Jexia
  base = `https://${this.projectID}.app.jexia.com`;
  // ws = `wss://${this.projectID}.app.jexia.com`;
  // dataSetEndpoint = `https://${this.projectID}.app.jexia.com/ds/${this.toolsDataSet}`;
  // setAccessToken(token: string) {
  //   localStorage.setItem('access_token', token);
  //   this.storage.setTokens(this.storage. token);
  //   return this.storage.getTokens().access_token;
  // }

  getAccessToken() {
    return this.storage.getTokens().access_token;
  }

  terminate(){
    this.storage.clear();
    this.client.terminate();
    this.storage = undefined;
  }

  // clearAccessToken() {
  //   this.client.terminate();
  //   this.storage.clear();
  // }
}
