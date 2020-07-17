import { OnInit, Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var Chart: any;
declare var swal: any;

@Component({
    selector:"app-form-stock-register",
    templateUrl: "./form-stock-register.component.html"
})
export class FormStockRegisterComponent implements OnInit, OnChanges, AfterViewInit {

    public form_stock_register: FormGroup;

    @Input() insumos:[];

    @Output() stock = new EventEmitter();

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    ngOnChanges(){

        let ds_insumos = this.insumos.map((obj:any) => {return {id:obj.nombreInsumos, text:obj.nombreInsumos};});

        $('#id_insumo').select2({
            data: ds_insumos,
            insertTag: function (data, tag) {
                data.push({id:tag.id,text:tag.text});
            },
        });

    }

    ngAfterViewInit(){
        
        let these = this;

        $('#id_insumo').on('select2:select', function(e){
            let text = e.params.data.text;
            these.form_stock_register.controls['nombreInsumos'].setValue(text);
            
        });

        $('#id_insumo').on('select2:open', function(e){
            these.form_stock_register.controls['nombreInsumos'].markAsTouched();
        });

    }

    async initForm(){

        this.form_stock_register = this._fb.group({
            nombreInsumos: [null, <any>Validators.required],
            ingresoInsumos: [0, <any>Validators.required],
            salidaInsumos: [0, <any>Validators.required],
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
                these.stock.emit(myform);
            })
        }
        else{
            alert("No se ha podido registrar");
        }
        
    }
}