import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { PivotGridModule } from '@progress/kendo-angular-pivotgrid';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PivotGridModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
