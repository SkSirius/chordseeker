import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as config from './config';

@Injectable()
export class ChordService {

  constructor(private httpSvc: Http) { }

  getChords(): Observable<Response> {
    const url = config.BASE_URL + '/chords';
    return this.httpSvc.get(url);
  }

  addChord(chord): Observable<Response> {
    const url = config.BASE_URL + '/chord';
    return this.httpSvc.post(url, chord);
  }

  editChord(chord): Observable<Response> {
    const url = config.BASE_URL + '/chord';
    return this.httpSvc.put(url, chord);
  }

  deleteChord(id): Observable<Response> {
    const url = config.BASE_URL + '/chord/' + id;
    return this.httpSvc.delete(url);
  }

  searchChord(name): Observable<Response> {
    const url = config.BASE_URL + '/chord/search/' + name;
    return this.httpSvc.get(url);
  }
}
