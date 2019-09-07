import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CeasaPage } from './ceasa.page';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: CeasaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CeasaPage, ItemComponent]
})
export class CeasaPageModule {}
