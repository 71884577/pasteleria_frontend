import { Component, OnInit } from "@angular/core";
import { RecetaService } from '../../services/receta.service';
import { InsumosService } from '../../services/insumos.service';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-receta',
    templateUrl: './receta.component.html'
})
export class RecetaComponent implements OnInit {

    public api_recetas = [];
    public api_insumos = [];
    public receta_update: any;

    constructor(private recetaService: RecetaService, private insumosService: InsumosService){}
    
    ngOnInit(){
        this.getRecetas();
        this.getInsumos();
    }

    async getInsumos(){
        this.insumosService.all().subscribe((response:any)=>{
            this.api_insumos = response.result;
        });
    }

    async getRecetas(){
        this.recetaService.all().subscribe((response:any)=>{
            this.api_recetas = response.result;
        });
    }

    onRegister(receta:any){
        this.recetaService.add(receta).subscribe((response:any)=>{
            alert("Registro realizado");
            this.getRecetas();
            this.getInsumos();
        });
    }

    onDelete(receta:any){
        this.recetaService.remove(receta.idReceta).subscribe((response:any)=>{
            this.getRecetas();
        });
    }

    onUpdate(receta:any){
        this.receta_update = receta;
        $("#modalEdit").modal('show');
    }

    onUpdate2(receta:any){
        this.recetaService.put(receta).subscribe((response:any)=>{
            this.getRecetas();
            this.getInsumos();
        });
    }

}