import { OnInit, Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var Chart: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-table-receta',
    templateUrl: './table-receta.component.html'
})
export class TableRecetaComponent implements OnInit, OnChanges{

    @Input() recetas: [];

    @Output() update = new EventEmitter();
    @Output() delete = new EventEmitter();

    public temp_recetas= [];

    constructor(){}

    ngOnInit(){}

    ngOnChanges(){
        this.temp_recetas = [...this.recetas];
    }

    onClickUpdate(e_receta:any){
        this.update.emit(e_receta);
    }

    onClickDelete(e_receta:any){

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
            these.delete.emit(e_receta);
        })

    }

    onKeyUp(e_keyup:any){

        let val = e_keyup.target.value.toLowerCase();

        this.temp_recetas = this.recetas.filter(function(d:any){
            if(d.nombreReceta && d.nombreReceta.toString().toLowerCase().indexOf(val) !== -1 || !val){
                return true;
            }
        });
    
    }
}