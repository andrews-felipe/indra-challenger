import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login/login.component';

import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers : [
    AuthService, 
  ]
})
export class PublicModule { }
