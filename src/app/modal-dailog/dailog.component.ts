import { Component, Output, EventEmitter } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'modal-dialog',
    exportAs: 'modal',
    templateUrl: './dailog.component.html',
    styleUrls: ['./dailog.component.css']
})

export class ModalDialog {
    @Output()
    modalClose: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router) { }

    closeModal($event) {
        this.router.navigate([{ outlets: { modal: null } }]);
        this.modalClose.next($event);
    }
}