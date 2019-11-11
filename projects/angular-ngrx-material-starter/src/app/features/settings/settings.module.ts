import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsContainerComponent } from './settings/settings-container.component';
import { ColorPickerContainerModule } from '../../color-picker/color-picker-container.module';

@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    ColorPickerContainerModule
  ]
})
export class SettingsModule {}
