import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [ColorPickerComponent],
  imports: [CommonModule, SharedModule],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule {}
