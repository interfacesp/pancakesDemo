import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PancakeFichePage } from './pancake-fiche.page';

const routes: Routes = [
  {
    path: '',
    component: PancakeFichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PancakeFichePageRoutingModule {}
