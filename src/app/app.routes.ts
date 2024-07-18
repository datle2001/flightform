import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login-page/login-page.component').then((m) => m.LoginPageComponent)
  },
  {
    path: 'flight-form',
    loadComponent: () => import('./flight-form-page/flight-form-page.component').then((m) => m.FlightFormPageComponent)
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];
