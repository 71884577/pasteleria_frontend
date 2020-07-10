import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servidores } from 'src/app/services/servidores';

@Injectable()
export class InsumosService {

    private url = '/insumos';
    
    constructor(private http: HttpClient, private servidores: Servidores) {
        this.url = this.servidores.ROY + this.url;
    }

    add(newObj: any) {
        return this.http.post(this.url, newObj);
    }

    all() {
        return this.http.get(this.url);
    }

    get(id: string) {
        return this.http.get(this.url + '/' + id);
    }
    
    put(chgObj: any) {
        return this.http.put(this.url + '/' + chgObj.idInsumos, chgObj);
    }
    
    remove(id: string) {
        return this.http.delete(this.url + '/' + id);
    }
    
}