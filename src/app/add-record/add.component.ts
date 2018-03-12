import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-record',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})


export class AddComponent {
    constructor(){}

    modalClose( $event ) {
        console.log($event); // { submitted: true }
      }
}