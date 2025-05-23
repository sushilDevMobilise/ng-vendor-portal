import { Routes } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { BlankComponent } from './layout/blank/blank.component';
import { OnlyHeaderComponent } from './layout/only-header/only-header.component';

export const routes: Routes = [
    {
        path: '',
        component: BlankComponent,
        children: [
            {
                path: '',
                redirectTo: 'auth',
                pathMatch: 'full'
            },
            {
                path: 'auth',
                loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
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
                path: '',
                redirectTo: 'onboarding',
                pathMatch: 'full'
            },
            {
                path: 'onboarding',
                loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule)
            }
        ]
    }
    // {
    //     path: '**',
    //     component:
    // }
];
