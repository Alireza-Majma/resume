import { Injectable } from '@angular/core';
import { Client, jexiaClient, WebStorageComponent, IAuthOptions } from 'jexia-sdk-js/browser';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export interface JexiaClient {
  getAccessToken: () => string;
}

export class JexiaAccess {
  static readonly projectID = environment.jexia.projectID; // Your Project ID at Jexia
  static readonly key = environment.jexia.key; // Your API key at Jexia
  static readonly secret = environment.jexia.secret; // Your API secret at JEXIA
  static readonly projectUrl = environment.jexia.projectURL; // Your API secret at JEXIA
  static readonly base = `https://${JexiaAccess.projectID}.app.jexia.com`;
  private static JexiaClient: Client;
  private static JexiaStorage: WebStorageComponent = new WebStorageComponent(true, window);
  static options: IAuthOptions = {
    projectID: JexiaAccess.projectID,
    key: JexiaAccess.key,
    secret: JexiaAccess.secret
  };

  static getAccessToken() {
    if (JexiaAccess && JexiaAccess.JexiaStorage) {
      return JexiaAccess.JexiaStorage.getTokens().access_token;
    }
    return '';
  }

  static Init(): Promise<Client> {
    if (!JexiaAccess.JexiaStorage.isEmpty) {
      return Promise.resolve(JexiaAccess.JexiaClient);
    }
    return jexiaClient().init(JexiaAccess.options)
      .then(x => {
        JexiaAccess.JexiaClient = x;
        JexiaAccess.JexiaStorage = new WebStorageComponent(true, window);
        return JexiaAccess.JexiaClient;
      })
      .catch(e => {
        console.log('error', e);
        return JexiaAccess.JexiaClient;
      });
  }
  static Terminate() {
    JexiaAccess.JexiaStorage.clear();
    JexiaAccess.JexiaClient.terminate();
  }

  static get Header() {
    return {headers: new HttpHeaders().append('Authorization', `Bearer ${JexiaAccess.getAccessToken()}`)};
  }

  static dataSetPath(dataSetName: string){
    return`${JexiaAccess.base}/ds/${dataSetName}`;
  }
}

