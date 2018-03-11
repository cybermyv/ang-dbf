import { Component, Output, EventEmitter } from '@angular/core';
import { Record } from '../record';


@Component({
    selector: 'crud-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    newRecord: Record = new Record();
    
    @Output()
    add: EventEmitter<Record> = new EventEmitter();

    constructor() { }

    addRecord() {
        this.add.emit(this.newRecord);
        this.newRecord = new Record();
    }


}