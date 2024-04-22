import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'loginadmin', component: LoginadminComponent },
    { path: 'admin', component: AdminComponent }
];
