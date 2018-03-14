import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Record } from '../record';


@Component({
    selector: 'add-record',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
    
})

export class AddComponent {


    newRecord: Record = new Record();
    
   

    @Output() add: EventEmitter<Record> = new EventEmitter();
    

    constructor() {
    }


    addRecord() {
        
        console.log('this.newRecord', this.newRecord);
        this.add.emit(this.newRecord);

        this.newRecord = new Record();
    }

    
   

}




