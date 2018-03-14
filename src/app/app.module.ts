import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RecordDataService } from './record-data.service';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './crud-header/header.component';
import { ListComponent } from './crud-list/list.component';
import { ListItemComponent } from './crud-list-item/list-item.component';
import { ModalDialog } from './modal-dailog/dailog.component';
import { AddComponent } from './add-record/add.component'
import { delConfirm } from './delConfirm/del.confirm';

import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ListComponent,
    ListItemComponent,
    ModalDialog,
    AddComponent,
    delConfirm
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecordDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
