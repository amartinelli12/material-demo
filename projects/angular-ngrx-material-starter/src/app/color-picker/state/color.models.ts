export interface Rgb {
  r: number;
  g: number;
  b: number;
}

export interface Hsl {
  h: number;
  s: number;
  l: number;
}

export interface Color {
  colorId: number;
  hexString: string;
  rgb: Rgb;
  hsl: Hsl;
  name: string;
  degree?: string;
}

export interface ColorState {
  colors: Color[];
  selectedColor: Color;
}
