import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servidores } from 'src/app/services/servidores';

@Injectable()
export class StockService {

    private url = '/stock';
    
    constructor(private http: HttpClient, private servidores: Servidores) {
        this.url = this.servidores.ROY + this.url;
    }

    add(newObj: any) {
        return this.http.post(this.url, newObj);
    }

    all() {
        return this.http.get(this.url);
    }

    reporte(){
        return this.http.get(this.url + '-reporte');
    }
}