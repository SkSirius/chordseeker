import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import * as config from '../../config';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ChordProvider {

  constructor(public http: Http) {}

  getChord(name): Observable<Response> {
    var url = config.BASE_URL + '/chord/search/' + name;
    return this.http.get(url);
  }
}
