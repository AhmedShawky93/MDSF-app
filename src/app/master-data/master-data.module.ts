import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { MasterDataComponent } from './master-data.component';
import { VanDetailsComponent } from './van-details/van-details.component';
import { PivotGridModule } from '@progress/kendo-angular-pivotgrid';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    MasterDataComponent,
    VanDetailsComponent,
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    PivotGridModule,
    GridModule
  ]
})
export class MasterDataModule { }
