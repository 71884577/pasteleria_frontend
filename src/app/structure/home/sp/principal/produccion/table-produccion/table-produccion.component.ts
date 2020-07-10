import { OnInit, Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var Chart: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-table-produccion',
    templateUrl: './table-produccion.component.html'
})
export class TableProduccionComponent implements OnInit, OnChanges{

    @Input() produccion: [];

    public temp_produccion= [];

    constructor(){}

    ngOnInit(){}

    ngOnChanges(){
        this.temp_produccion = [...this.produccion];
    }

    onKeyUp(e_keyup:any){

        let val = e_keyup.target.value.toLowerCase();

        this.temp_produccion = this.temp_produccion.filter(function(d:any){
            if(d.nombreInsumo && d.nombreInsumo.toString().toLowerCase().indexOf(val) !== -1 || !val){
                return true;
            }
        });
    
    }
}