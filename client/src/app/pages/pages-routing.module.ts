import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'settings',
        canActivate: [AuthGuard],
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'to-do',
        canActivate: [AuthGuard],
        loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoPageModule)
      },
      {
        path: 'request',
        canActivate: [AuthGuard],
        loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
      },
      {
        path: 'grid',
        canActivate: [AuthGuard],
        loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
