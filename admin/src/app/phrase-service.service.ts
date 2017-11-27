import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as config from './config';

@Injectable()
export class PhraseService {

  constructor(private httpSvc: Http) { }

  getPhrases(): Observable<Response> {
    const url = config.BASE_URL + '/phrases';
    return this.httpSvc.get(url);
  }

  addPhrase(phrase): Observable<Response> {
    const url = config.BASE_URL + '/phrase';
    return this.httpSvc.post(url, phrase);
  }

  editPhrase(phrase): Observable<Response> {
    const url = config.BASE_URL + '/phrase';
    return this.httpSvc.put(url, phrase);
  }

  deletePhrase(id): Observable<Response> {
    const url = config.BASE_URL + '/phrase/' + id;
    return this.httpSvc.delete(url);
  }

  searchPhrase(name): Observable<Response> {
    const url = config.BASE_URL + '/phrase/search/' + name;
    return this.httpSvc.get(url);
  }
}
