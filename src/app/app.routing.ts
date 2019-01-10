import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { SimpleLayoutComponent } from './components/simple-layout/simple-layout.component';
import {NavLayoutComponent} from './components/nav-layout/nav-layout.component';

export const routes: Routes = [
  {path: '', redirectTo: 'nav', pathMatch: 'full'},
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
    ],
  },
  {
    path: 'nav',
    component: NavLayoutComponent,
  },

  // otherwise redirect to NotFoundPage
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
