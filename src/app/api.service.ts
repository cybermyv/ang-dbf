import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Response  } from '@angular/http';

import { Record } from './record';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
    constructor(private http: Http) { }



    public getAllRecords(): Observable<Record[]> {
        return this.http
            .get(API_URL + '/main')
            .map((response) => {
                const records = response.json();
                return records.map((record) => new Record(record));
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
//.head('Access-Control-Allow-Origin', '*')