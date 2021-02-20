import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false,
        useHash: false
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
