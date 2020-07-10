import { OnInit, Component, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var Chart: any;
declare var swal: any;

@Component({
    selector:"app-form-receta-register",
    templateUrl: "./form-receta-register.component.html"
})
export class FormRecetaRegisterComponent implements OnInit {

    public form_receta_register: FormGroup;

    @Input() insumos: [];
    @Output() receta = new EventEmitter();

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    async initForm(){

        this.form_receta_register = this._fb.group({
            nombreReceta: [null, <any>Validators.required],
            tipReceta: [null, <any>Validators.required],
            desReceta: [null, <any>Validators.required],
            insumos: this._fb.array([], <any>Validators.required)
        });
    }

    agregarInsumo(){
        
        let insumos = this.form_receta_register.get('insumos') as FormArray;

        insumos.push(
            this._fb.group({
                nombreInsumo: '',
                marcInsumo: '',
                fvInsumo: '',
                precInsumo: '',
                stock: '',
                stockPromedio: '',
                stockMinimo: '',
                desInsumo: '',
                catInsumo: '',
                cantInsumo: '',
                umInsumo: ''
          })
        );
        
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
                these.receta.emit(myform);
            })

        }
        else{
            alert("No se ha podido registrar");
        }
        
    }
}


@Component({
    selector: 'form-insumo-register',
    templateUrl: './form-insumo-register.component.html'
})
export class FormInsumoRegisterComponent implements OnInit, OnChanges, AfterViewInit {

    @Input() form_insumo: FormGroup;
    @Input() insumos: [];

    public id_insumos = '';

    constructor(){
        let date = new Number(new Date());
        let id = date.toString()+(Math.floor(Math.random() * 10));
        this.id_insumos = id + 'insumos_r';
    };

    ngOnInit(){}

    ngOnChanges(){
        let these = this;
        let ds_insumos = this.insumos.map((obj:any) => {return {id:obj.nombreInsumos, text:obj.nombreInsumos};});
        let jq_id_insumos = '#'+these.id_insumos;

        $(jq_id_insumos).select2({
            data: ds_insumos,
            tags: true,
            insertTag: function (data, tag) {
                data.push({id:tag.id,text:tag.text});
            },
        });
    }

    ngAfterViewInit(){

        let these = this;
        let ds_insumos = this.insumos.map((obj:any) => {return {id:obj.nombreInsumos, text:obj.nombreInsumos};});
        let jq_id_insumos = '#'+these.id_insumos;

        $(jq_id_insumos).select2({
            data: ds_insumos,
            tags: true,
            insertTag: function (data, tag) {
                data.push({id:tag.id,text:tag.text});
            },
        });

        $(jq_id_insumos).on('select2:select', function(e){
            let text = e.params.data.text;
            these.form_insumo.controls['nombreInsumo'].setValue(text);
            
        });

        $(jq_id_insumos).on('select2:open', function(e){
            these.form_insumo.controls['nombreInsumo'].markAsTouched();
        });
    }
}