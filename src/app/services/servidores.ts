import {Injectable} from '@angular/core';

@Injectable()
export class Servidores {
  public serverLocal = 'http://localhost';
  public ROY = this.serverLocal + ':8000/api/v1';

}
