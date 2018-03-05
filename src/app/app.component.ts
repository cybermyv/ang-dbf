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
  title = 'dbf - парсер';

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
  }


}
