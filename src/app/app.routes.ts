import { DASHBOARD_ROUTES } from './dashboard/dashboard.routes';

export const APP_ROUTES = [
  {
    path: 'dashboard',
    children: DASHBOARD_ROUTES,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
