import { Component, Output, EventEmitter  } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { RecordDataService } from '../record-data.service';
import { Record } from '../record';

@Component({
    selector: 'modal-dialog',
    exportAs: 'modal',
    templateUrl: './dailog.component.html',
    styleUrls: ['./dailog.component.css'],
    providers: [RecordDataService]
    
})

export class ModalDialog {
    records: Record[] = [];

    newRecord: Record = new Record();

    
    // @Output() add: EventEmitter<Record> = new EventEmitter<any>();
        
    @Output()
     modalClose: EventEmitter<any> = new EventEmitter<any>();
    
    constructor(private router: Router, private recordDataService: RecordDataService ) { }
    
    closeModal($event) {
        this.router.navigate([{ outlets: { modal: null } }]);
        this.modalClose.next($event);
    }
    addRecord() {
        console.log(this.newRecord);
        // this.add.emit(this.newRecord);
         this.recordDataService.createRecord(this.newRecord)
         .subscribe(()=>{
             this.recordDataService.getAllRecords()
             .subscribe((records)=>{
                console.log('records',records)
             });
            
         });
        
    }
   
    
}

