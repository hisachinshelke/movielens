import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  // { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'info/:id', loadChildren: './pages/info/info.module#InfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
