import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/persp',
    pathMatch: 'full'
  },
  {
    path: 'persp',
    loadChildren: () => import('./perspectiva/perspectiva.module').then(m => m.PerspectivaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'listaCEASA',
    loadChildren: () => import('./ceasa/ceasa.module').then(m => m.CeasaPageModule)
  },
  {
    path: 'meusProdutos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosPageModule)
  },
  {
    path: 'sobreApp',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then(m => m.SairPageModule)
  },
  { path: 'ceasa', loadChildren: './ceasa/ceasa.module#CeasaPageModule' },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  { path: 'sair', loadChildren: './sair/sair.module#SairPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'perspectiva', loadChildren: './perspectiva/perspectiva.module#PerspectivaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
