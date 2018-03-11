import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RecordDataService } from './record-data.service';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './crud-header/header.component';
import { ListComponent } from './crud-list/list.component';
import { ListItemComponent } from './crud-list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecordDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
