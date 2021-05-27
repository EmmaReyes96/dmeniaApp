import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PopoverComponent,
    PopoverInfoComponent
  ],
  exports:[
    HeaderComponent,
    PopoverComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
