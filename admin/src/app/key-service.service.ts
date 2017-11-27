import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as config from './config';

@Injectable()
export class KeyService {

  constructor(private httpSvc: Http) { }

  getKeys(): Observable<Response> {
    const url = config.BASE_URL + '/keys';
    return this.httpSvc.get(url);
  }

  addKey(key): Observable<Response> {
    const url = config.BASE_URL + '/key';
    return this.httpSvc.post(url, key);
  }

  editKey(key): Observable<Response> {
    const url = config.BASE_URL + '/key';
    return this.httpSvc.put(url, key);
  }

  deleteKey(id): Observable<Response> {
    const url = config.BASE_URL + '/key/' + id;
    return this.httpSvc.delete(url);
  }

  searchKey(name): Observable<Response> {
    const url = config.BASE_URL + '/key/search/' + name;
    return this.httpSvc.get(url);
  }
}
