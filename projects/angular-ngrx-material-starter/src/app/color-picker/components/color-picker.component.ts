import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Color } from '../state/color.models';

interface ColorPickerStyle {
    'height': string;
    'width': string;
    'background-color': string;
    'transform': string;
}

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() colors: Color[];
  @Input() radius: string;
  @Input() sliceHeight: string;
  @Input() hoverHeight: string;
  @Output() pickColor: EventEmitter<Color> = new EventEmitter();
  hoveredIndex: number;

  constructor() {}

  ngOnChanges() {

  }

  trackByFunc(index: number, color: Color) {
    return color.colorId;
  }

  selectPrimaryColor(color: Color) {
    this.pickColor.emit(color);
  }

  hover(color?: Color, index?: number) {
      this.hoveredIndex = index ? index : -1;
  }

  setStyle(color: Color, index: number): string {
    return index === this.hoveredIndex ? this.hoverHeight : this.sliceHeight
  }
}
