import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Response  } from '@angular/http';

import { Record } from './record';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
    constructor(private http: Http) { }



    public getAllRecords(): Observable<any> {
        return this.http
            .get(API_URL + '/users')
            .map((response) => {
                // const records = response.json();
                // return records.map((record) => new Record(record));
                return response.json();
            })
            
            .catch(this.handleError);
    };

    public createRecord(record: Record):Observable<Record>{
        return this.http
        .post(API_URL+'/users', record)
        .map(response => {
            //return new Record(response.json())
            return new Record(record)
        })
        .catch(this.handleError);

    };

    public updateRecord(record: Record): Observable<Record> {
        return this.http
        .put(API_URL + '/users/' + record.id, record)
        .map(response =>{
            return new Record(record);
        })
        .catch(this.handleError);
    };


    public removeRecord(recordId: number): Observable<null>{
        return this.http
        .delete(API_URL + '/users/'+ recordId)
        .map(response => null)
        .catch(this.handleError);
    };

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    };

    

}
