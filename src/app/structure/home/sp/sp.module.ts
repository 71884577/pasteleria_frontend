import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SpRoutes } from './sp.routing';
import { SpComponent } from './sp.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SpRoutes),
        FormsModule,
        FileUploadModule,
        NgxDatatableModule,
        ReactiveFormsModule
    ],
    declarations: [
        SpComponent
    ],
    providers: [

    ]
})

export class SpModule { }