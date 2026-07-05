import { Routes } from '@angular/router';

import { Users } from './users/users';
import { Report } from './report/report';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'report',
    pathMatch: 'full'
  },
  {
    path: 'report',
    component: Report
  },
  {
    path: 'users',
    component: Users
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];