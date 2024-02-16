import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonsModule } from '../common/commons.module';
import { ComponentModule } from '../component/component.module';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonsModule,
    ComponentModule
  ]
})
export class HomeModule { }
