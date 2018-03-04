import { Injectable } from '@angular/core';
import { Record } from './record';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class RecordDataService {
    constructor(
        private api: ApiService
    ) { }

    getAllRecords(): Observable<Record[]> {
        return this.api.getAllRecords();
    }

}