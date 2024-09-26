import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecContraPageRoutingModule } from './rec-contra-routing.module';

import { RecContraPage } from './rec-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecContraPageRoutingModule
  ],
  declarations: [RecContraPage]
})
export class RecContraPageModule {}
