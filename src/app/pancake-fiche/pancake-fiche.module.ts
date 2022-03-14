import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PancakeFichePageRoutingModule } from './pancake-fiche-routing.module';

import { PancakeFichePage } from './pancake-fiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PancakeFichePageRoutingModule
  ],
  declarations: [PancakeFichePage]
})
export class PancakeFichePageModule {}
