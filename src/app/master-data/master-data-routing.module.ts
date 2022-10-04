import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataComponent } from './master-data.component';
import { VanDetailsComponent } from './van-details/van-details.component';

const routes: Routes = [
  {
    path: 'revan',
    component: MasterDataComponent
  },
  {
    path: 'vand',
    component: VanDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }
