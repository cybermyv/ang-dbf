import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http } from '@angular/http';

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
                const record = response.json();
          //      console.log(record);
                return record.map(record => {new Record(record);
            //     console.log(Record);
            // return record
        });
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
//.head('Access-Control-Allow-Origin', '*')