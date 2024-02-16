import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items/list-items.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonsModule } from '../common/commons.module';



@NgModule({
  declarations: [
    ListItemsComponent,
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    CommonsModule
  ],
  exports: [
    ListItemsComponent,
    DetailItemComponent
  ]
})
export class ComponentModule { }
