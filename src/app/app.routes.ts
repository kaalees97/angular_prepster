import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TermsConditionsComponent } from './policy/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './policy/privacy-policy/privacy-policy.component';
import { ExchangeRefundPolicyComponent } from './policy/exchange-refund-policy/exchange-refund-policy.component';

import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';

import { UserRoleComponent } from './user/user-role/user-role.component';

export const routes: Routes = [


    // {
    //     path:'',
    //     component:LoginComponent
    // },

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

    {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
    },

    {
        path:'exchange-refund-policy',
        component:ExchangeRefundPolicyComponent
    },

    {
        path:'admin/index',
        component:DashboardIndexComponent
    },

    {
        path:'user/roles',
        component:UserRoleComponent
    },
];


