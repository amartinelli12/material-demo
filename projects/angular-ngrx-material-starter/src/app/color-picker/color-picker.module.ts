import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ColorPickerContainerComponent } from './color-picker.component';

@NgModule({
  declarations: [ColorPickerContainerComponent],
  imports: [CommonModule, SharedModule],
  exports: [ColorPickerContainerComponent]
})
export class ColorPickerModule {}
