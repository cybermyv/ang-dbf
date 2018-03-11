import {
  Component,
  OnInit
} from '@angular/core';

import { RecordDataService } from './record-data.service';
import { Record } from './record';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecordDataService]
})
export class AppComponent implements OnInit {

  records: Record[] = [];
  title = 'CRUD приложение';

  constructor(
    private recordDataService: RecordDataService) {
  }

  public ngOnInit() {
    this.recordDataService
      .getAllRecords()
      .subscribe(
        (records) => {

          this.records = records;
          console.log(this.records);
        }
      )
  };


  onAddRecord(record) {
    this.recordDataService
      .createRecord(record)
      .subscribe(
        (newRecord) => { this.records = this.records.concat(newRecord) });
  };

  //  onEditRecord

  onRemoveRecord(record){
    this.recordDataService
    .removeRecord(record.id)
    .subscribe(
      (_) =>{ this.records = this.records.filter((r)=> r.id!==record.id)}
    );
  }


}
