import { OnInit, Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var Chart: any;
declare var swal: any;

@Component({
    selector:"app-form-insumos-register",
    templateUrl: "./form-insumos-register.component.html"
})
export class FormInsumosRegisterComponent implements OnInit {

    public form_insumos_register: FormGroup;

    @Output() insumos = new EventEmitter();

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    async initForm(){

        this.form_insumos_register = this._fb.group({
            nombreInsumos: [null, <any>Validators.required]
        });
    }


    onSubmit(myform: any, isValid: Boolean){

        if(isValid){
            let these = this;
            swal({
                title: "Confirmar Registro",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#dd6b55',
                cancelButtonColor: '#999',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Confirmar',
                dangerMode: true,
            }, function(){
                these.insumos.emit(myform);
            })
        }
        else{
            alert("No se ha podido registrar");
        }
        
    }
}