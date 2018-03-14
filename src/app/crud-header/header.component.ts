import { Component, Output, EventEmitter } from '@angular/core';
// import { Record } from '../record';


@Component({
    selector: 'crud-header',
    exportAs: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    // newRecord: Record = new Record();
    
    // @Output()
    // add: EventEmitter<Record> = new EventEmitter();

    // constructor() { }

    // headerAddRecord() {
    //     this.add.emit(this.newRecord);
    //     this.newRecord = new Record();
    // }


}