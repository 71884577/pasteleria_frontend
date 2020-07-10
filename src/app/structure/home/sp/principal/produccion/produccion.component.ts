import { Component, OnInit } from "@angular/core";
import { ProduccionService } from '../../services/produccion.service';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-produccion',
    templateUrl: './produccion.component.html'
})
export class ProduccionComponent implements OnInit {

    public api_produccion = [];
    
    constructor(private produccionService: ProduccionService){}
    
    ngOnInit(){
        this.getRecetas();
    }

    async getRecetas(){
        this.produccionService.all().subscribe((response:any)=>{
            this.api_produccion = response.result;
        });
    }

}