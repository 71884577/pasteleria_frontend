import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InlineSVGModule } from 'ng-inline-svg';
import { RecetaRoutes } from './principal.routing';
import { RecetaComponent } from './receta/receta.component';
import { RecetaService } from '../services/receta.service';
import { FormRecetaRegisterComponent, FormInsumoRegisterComponent } from './receta/form-receta-register/form-receta-register.component';
import { FormRecetaUpdateComponent, FormInsumoUpdateComponent } from './receta/form-receta-update/form-receta-update.component';
import { TableRecetaComponent } from './receta/table-receta/table-receta.component';
import { PrincipalComponent } from './principal.component';
import { TableProduccionComponent } from './produccion/table-produccion/table-produccion.component';
import { ProduccionService } from '../services/produccion.service';
import { ProduccionComponent } from './produccion/produccion.component';
import { InsumosService } from '../services/insumos.service';
import { InsumosComponent } from './insumos/insumos.component';
import { TableInsumosComponent } from './insumos/table-insumos/table-insumos.component';
import { FormInsumosRegisterComponent } from './insumos/form-insumos-register/form-insumos-register.component';
import { FormInsumosUpdateComponent } from './insumos/form-insumos-update/form-insumos-update.component';
import { StockService } from '../services/stock.service';
import { StockComponent } from './stock/stock.component';
import { FormStockRegisterComponent } from './stock/form-stock-register/form-stock-register.component';
import { TableStockComponent } from './stock/table-stock/table-stock.component';
import { TableStockReporteComponent } from './stock/table-stock-reporte/table-stock-reporte.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RecetaRoutes),
        FormsModule,
        InlineSVGModule,
        FileUploadModule,
        NgxDatatableModule,
        ReactiveFormsModule
    ],
    declarations: [
        PrincipalComponent,
        RecetaComponent,
        FormRecetaRegisterComponent,
        FormRecetaUpdateComponent,
        TableRecetaComponent,
        FormInsumoRegisterComponent,
        ProduccionComponent,
        TableProduccionComponent,
        InsumosComponent,
        FormInsumosRegisterComponent,
        FormInsumosUpdateComponent,
        TableInsumosComponent,
        FormInsumoUpdateComponent,
        StockComponent,
        FormStockRegisterComponent,
        TableStockComponent,
        TableStockReporteComponent

    ],
    providers: [
        DatePipe,
        RecetaService,
        ProduccionService,
        InsumosService,
        StockService
    ]
})

export class PrincipalModule { }