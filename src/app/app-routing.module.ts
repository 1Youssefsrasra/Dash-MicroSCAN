import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    {
        path: '',
        component:HomepageComponent,
        //loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        //canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },
    { path: '', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule) },
    
    {
        path: 'error',
        loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
    },
   /* {
        path: 'access-denied',
        loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
