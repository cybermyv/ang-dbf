import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Record } from '../record';

@Component({
    selector: 'crud-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    @Input()
    records: Record[];

    @Output()
    remove: EventEmitter<Record> = new EventEmitter();

    @Output()
    edit: EventEmitter<Record> = new EventEmitter();

    constructor() { }

    onEditRecord(record: Record) {
        this.edit.emit(record);
    }

    onRemoveRecord(record: Record) {
        this.remove.emit(record);
    }
}