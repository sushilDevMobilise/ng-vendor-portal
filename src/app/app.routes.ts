import { Routes } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { OnlyHeaderComponent } from './layout/only-header/only-header.component';

export const routes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: '',
                redirectTo: 'main-dashboard',
                pathMatch: 'full'
            },
            {
                path: 'main-dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    },
    {
        path: '',
        component: OnlyHeaderComponent,
        children: [
            {
                path: 'main-dashboard',
                loadChildren: () => import('./modules/inner-pages/inner-pages.module').then(m => m.InnerPagesModule)
            }
        ]
    }
];
