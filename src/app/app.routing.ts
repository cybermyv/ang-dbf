import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './crud-header/header.component';
import { ModalDialog } from './modal-dailog/dailog.component';
import { AddComponent } from './add-record/add.component';
import { delConfirm } from './delConfirm/del.confirm';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        


    },
    {
        path: 'users/add',
        component: ModalDialog,
        outlet: 'modal'
        
    },

    {
        path: 'users/del',
        component: delConfirm,
        outlet: 'modal'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }