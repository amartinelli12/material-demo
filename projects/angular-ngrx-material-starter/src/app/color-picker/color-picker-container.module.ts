import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ColorPickerContainerComponent } from './color-picker-container.component';
import { ColorPickerModule } from './components/color-picker.module';

@NgModule({
  declarations: [ColorPickerContainerComponent],
  imports: [CommonModule, SharedModule, ColorPickerModule],
  exports: [ColorPickerContainerComponent]
})
export class ColorPickerContainerModule {}
