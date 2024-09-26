import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecContraPage } from './rec-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RecContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecContraPageRoutingModule {}
