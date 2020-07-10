import { OnInit, Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var Chart: any;
declare var swal: any;

@Component({
    selector: 'app-form-receta-update',
    templateUrl: './form-receta-update.component.html'
})
export class FormRecetaUpdateComponent implements OnInit, OnChanges {
    
    public form_receta_update: FormGroup;

    @Input() insumos: [];
    @Input() receta:any;
    @Output() receta2 = new EventEmitter(); 

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    ngOnChanges(){

        if(this.receta){
            console.log(this.receta);
            this.form_receta_update.controls['idReceta'].setValue(this.receta.idReceta);
            this.form_receta_update.controls['nombreReceta'].setValue(this.receta.nombreReceta);
            this.form_receta_update.controls['tipReceta'].setValue(this.receta.tipReceta);
            this.form_receta_update.controls['desReceta'].setValue(this.receta.desReceta);

            let insumos = this.form_receta_update.get('insumos') as FormArray;

            while(insumos.length !== 0){
                insumos.removeAt(0);
            }
            if( this.receta.insumos && (this.receta.insumos.length > 0)){
                
                for (var i = 0; i < this.receta.insumos.length; i++) {
                    insumos.push(
                        this._fb.group({
                            nombreInsumo: this.receta.insumos[i].nombreInsumo,
                            marcInsumo: this.receta.insumos[i].marcInsumo,
                            fvInsumo: this.receta.insumos[i].fvInsumo,
                            precInsumo: this.receta.insumos[i].precInsumo,
                            stock: this.receta.insumos[i].stock,
                            stockPromedio: this.receta.insumos[i].stockPromedio,
                            stockMinimo: this.receta.insumos[i].stockMinimo,
                            desInsumo: this.receta.insumos[i].desInsumo,
                            catInsumo: this.receta.insumos[i].catInsumo,
                            cantInsumo: this.receta.insumos[i].cantInsumo,
                            umInsumo: this.receta.insumos[i].umInsumo,      
                        })
                    );
                }
            }
        }
    }

    async initForm(){

        this.form_receta_update = this._fb.group({
            idReceta: [null, <any>Validators.required],
            nombreReceta: [null, <any>Validators.required],
            tipReceta: [null, ''],
            desReceta: [null, ''],
            insumos: this._fb.array([]),
        });
    }

    agregarInsumo(){
        
        let insumos = this.form_receta_update.get('insumos') as FormArray;

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

    onSubmit(form_value:any, form_valid: any){
        
        if(form_valid){
            this.receta2.emit(form_value);
        }

    }

}

@Component({
    selector: 'form-insumo-update',
    templateUrl: './form-insumo-update.component.html'
})
export class FormInsumoUpdateComponent implements OnInit, OnChanges, AfterViewInit {

    @Input() form_insumo_update: FormGroup;
    @Input() insumos: [];

    public id_insumos_update = '';

    constructor(){
        let date = new Number(new Date());
        let id = date.toString()+(Math.floor(Math.random() * 10));
        this.id_insumos_update = id + 'insumos_u';
    };

    ngOnInit(){}

    ngOnChanges(){

        let these = this;
        let ds_insumos = this.insumos.map((obj:any) => {return {id:obj.nombreInsumos, text:obj.nombreInsumos};});
        let jq_id_insumos = '#'+these.id_insumos_update;

        $(jq_id_insumos).select2({
            data: ds_insumos,
            tags: true,
            insertTag: function (data, tag) {
                data.push({id:tag.id,text:tag.text});
            },
        });

        $(jq_id_insumos).val(this.form_insumo_update.get('nombreInsumo').value).trigger('change');
    }

    ngAfterViewInit(){

        let these = this;
        let ds_insumos = this.insumos.map((obj:any) => {return {id:obj.nombreInsumos, text:obj.nombreInsumos};});
        let jq_id_insumos = '#'+these.id_insumos_update;

        $(jq_id_insumos).select2({
            data: ds_insumos,
            tags: true,
            insertTag: function (data, tag) {
                data.push({id:tag.id,text:tag.text});
            },
        });

        $(jq_id_insumos).val(this.form_insumo_update.get('nombreInsumo').value).trigger('change');

        $(jq_id_insumos).on('select2:select', function(e){
            let text = e.params.data.text;
            these.form_insumo_update.controls['nombreInsumo'].setValue(text);
            
        });

        $(jq_id_insumos).on('select2:open', function(e){
            these.form_insumo_update.controls['nombreInsumo'].markAsTouched();
        });
    }
}