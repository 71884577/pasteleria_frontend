import { OnInit, Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var Chart: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-table-insumos',
    templateUrl: './table-insumos.component.html'
})
export class TableInsumosComponent implements OnInit, OnChanges{

    @Input() insumos: [];

    @Output() update = new EventEmitter();
    @Output() delete = new EventEmitter();

    public temp_insumos= [];

    constructor(){}

    ngOnInit(){}

    ngOnChanges(){
        this.temp_insumos = [...this.insumos];
    }

    onClickUpdate(e_insumos:any){
        this.update.emit(e_insumos);
    }

    onClickDelete(e_insumos:any){

        let these = this;

        swal({
            title: "Estas seguro que desea eliminar?",
            text: "Una vez eliminado no podra recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#dd6b55',
            cancelButtonColor: '#999',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            dangerMode: true,
        }, function(){
            these.delete.emit(e_insumos);
        })

    }

    onKeyUp(e_keyup:any){

        let val = e_keyup.target.value.toLowerCase();

        this.temp_insumos = this.insumos.filter(function(d:any){
            if(d.nombreInsumos && d.nombreInsumos.toString().toLowerCase().indexOf(val) !== -1 || !val){
                return true;
            }
        });
    
    }
}