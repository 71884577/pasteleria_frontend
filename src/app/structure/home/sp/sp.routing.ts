import {Routes} from '@angular/router';
import {SpComponent} from './sp.component';

export const SpRoutes: Routes = [
    {
         path: '',
         component: SpComponent,
         children: [
            {
                path: 'principal',
                loadChildren: './principal/principal.module#PrincipalModule'
            }
        ]
    }
];