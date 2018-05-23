import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { PageComponent } from './page/page.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'page/:id', component: PageComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'login', component: LoginComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);