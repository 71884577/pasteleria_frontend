import { Routes } from '@angular/router';
import { RecetaComponent } from './receta/receta.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { InsumosComponent } from './insumos/insumos.component';

export const RecetaRoutes: Routes = [
    {
        path: 'receta',
        component: RecetaComponent
    },
    {
        path: 'produccion',
        component: ProduccionComponent
    },
    {
        path: 'insumos',
        component: InsumosComponent
    },

];