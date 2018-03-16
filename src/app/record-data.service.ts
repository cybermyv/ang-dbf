import { Injectable } from '@angular/core';
import { Record } from './record';
import { ApiService } from './api.service';
import { Observable } from "rxjs/Rx";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class RecordDataService {
private _records = new BehaviorSubject<Record[]>([]);
// public records$ = this._records.asObservable();

public get records(){
    return this._records;
}

public set records(value: any){
    this._records.next(value);
}

constructor(
        private api: ApiService ) { }

    getAllRecords(): Observable<Record[]> {
        // return this.api.getAllRecords();
        const recordsObs = this.api.getAllRecords().do((records:Record[])=>{
            this.records = records;

        });
        recordsObs.subscribe(()=>{});
        return recordsObs;
    }

    createRecord (record: Record): Observable<Record>{
        return this.api.createRecord(record);
    }

    updateRecord (record: Record): Observable<Record>{
        return this.api.updateRecord(record);
    }

    removeRecord (recordId: number): Observable<Record>{
        return this.api.removeRecord(recordId);
    }

}