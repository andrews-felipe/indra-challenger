import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlayersComponent } from './components/players/players.component';
import { ItensComponent } from './components/itens/itens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  DashboardComponent,
  MenuComponent,
  PlayersComponent,
  ItensComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : []
})
export class PrivateModule { }
