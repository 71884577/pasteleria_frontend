import { OnInit, Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var Chart: any;
declare var swal: any;

@Component({
    selector: 'app-form-insumos-update',
    templateUrl: './form-insumos-update.component.html'
})
export class FormInsumosUpdateComponent implements OnInit, OnChanges {
    
    public form_insumos_update: FormGroup;

    @Input() insumos:any;
    @Output() insumos2 = new EventEmitter(); 

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    ngOnChanges(){

        if(this.insumos){
            this.form_insumos_update.controls['idInsumos'].setValue(this.insumos.idInsumos);
            this.form_insumos_update.controls['nombreInsumos'].setValue(this.insumos.nombreInsumos);

            let insumos = this.form_insumos_update.get('insumos') as FormArray;     
        }
    }

    async initForm(){

        this.form_insumos_update = this._fb.group({
            idInsumos: [null, <any>Validators.required],
            nombreInsumos: [null, <any>Validators.required]
        });
    }

    onSubmit(form_value:any, form_valid: any){
        
        if(form_valid){
            this.insumos2.emit(form_value);
        }

    }

}