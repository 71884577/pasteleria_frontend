import { OnInit, Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var Chart: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-table-stock',
    templateUrl: './table-stock.component.html'
})
export class TableStockComponent implements OnInit, OnChanges{
    
    @Input() stock: [];


    public temp_stock= [];

    constructor(){}

    ngOnInit(){}

    ngOnChanges(){
        this.temp_stock = [...this.stock];
    }

    onKeyUp(e_keyup:any){

        let val = e_keyup.target.value.toLowerCase();

        this.temp_stock = this.stock.filter(function(d:any){
            if(d.nombreInsumos && d.nombreInsumos.toString().toLowerCase().indexOf(val) !== -1 || !val){
                return true;
            }
        });
    
    }
}