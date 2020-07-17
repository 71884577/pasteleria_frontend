import { Component, OnInit } from "@angular/core";
import { StockService } from '../../services/stock.service';
import { InsumosService } from '../../services/insumos.service';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html'
})
export class StockComponent implements OnInit {

    public api_stock = [];
    public api_insumos = [];
    public api_stock_reporte = [];
    constructor(private stockService: StockService, private insumosServices: InsumosService){}
    
    ngOnInit(){
        
        this.getInsumos();
        this.getStock();
        this.getStockReporte();

    }

    async getInsumos(){
        this.insumosServices.all().subscribe((response:any)=>{
            this.api_insumos = response.result;
        });
    }

    async getStock(){
        this.stockService.all().subscribe((response:any)=>{
            this.api_stock = response.result;
        });
    }

    async getStockReporte(){
        this.stockService.reporte().subscribe((response:any)=>{
            this.api_stock_reporte = response.result;
        });
    }

    onRegister(stock:any){
        this.stockService.add(stock).subscribe((response:any)=>{
            alert("Registro realizado");
            this.getStock();
            this.getStockReporte();
        });
    }

}