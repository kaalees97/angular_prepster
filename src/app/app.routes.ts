import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TermsConditionsComponent } from './policy/terms-conditions/terms-conditions.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },

    {
        path:'register',
        component:RegisterComponent
    },

    {
        path:'terms-conditions',
        component:TermsConditionsComponent
    },
];


