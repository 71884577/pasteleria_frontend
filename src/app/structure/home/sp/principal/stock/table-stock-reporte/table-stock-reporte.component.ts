import { OnInit, Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var Chart: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-table-stock-reporte',
    templateUrl: './table-stock-reporte.component.html'
})
export class TableStockReporteComponent implements OnInit, OnChanges{

    @Input() stock_reporte: [];


    public temp_stock_reporte= [];

    constructor(){}

    ngOnInit(){}

    ngOnChanges(){
        this.temp_stock_reporte = [...this.stock_reporte];
    }

    onKeyUp(e_keyup:any){

        let val = e_keyup.target.value.toLowerCase();

        this.temp_stock_reporte = this.stock_reporte.filter(function(d:any){
            if(d.nombreInsumos && d.nombreInsumos.toString().toLowerCase().indexOf(val) !== -1 || !val){
                return true;
            }
        });
    
    }
}