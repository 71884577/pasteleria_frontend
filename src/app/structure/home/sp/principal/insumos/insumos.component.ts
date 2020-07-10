import { Component, OnInit } from "@angular/core";
import { InsumosService } from '../../services/insumos.service';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-insumos',
    templateUrl: './insumos.component.html'
})
export class InsumosComponent implements OnInit {

    public api_insumos = [];

    public insumos_update: any;

    constructor(private insumosService: InsumosService){}
    
    ngOnInit(){
        this.getInsumos();
    }

    async getInsumos(){
        this.insumosService.all().subscribe((response:any)=>{
            this.api_insumos = response.result;
        });
    }

    onRegister(insumos:any){
        this.insumosService.add(insumos).subscribe((response:any)=>{
            alert("Registro realizado");
            this.getInsumos();
        });
    }

    onDelete(insumos:any){
        this.insumosService.remove(insumos.idInsumos).subscribe((response:any)=>{
            this.getInsumos();
        });
    }

    onUpdate(insumos:any){
        this.insumos_update = insumos;
        $("#modalEdit").modal('show');
    }

    onUpdate2(insumos:any){
        this.insumosService.put(insumos).subscribe((response:any)=>{
            this.getInsumos();
        });
    }

}