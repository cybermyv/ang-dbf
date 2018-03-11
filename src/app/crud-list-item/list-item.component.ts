import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Record} from './../record';


@Component({
    selector: 'crud-list-item',
    templateUrl: './list-item.component.html',
    styleUrls:['./list-item.component.css']
})

export class ListItemComponent{
    @Input()
    record: Record;

    @Output()
    remove: EventEmitter<Record> = new EventEmitter();

    @Output()

    edit: EventEmitter<Record> = new EventEmitter();

    constructor(){}

    editRecord (record: Record){
        this.edit.emit(record);
    };

    removeRecord (record: Record){
        this.remove.emit(record);
    };

}