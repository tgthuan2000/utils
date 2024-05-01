export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface RgbaColor extends RgbColor {
  a: number;
}

export const getBrightness = ({ r, g, b }: RgbaColor) => (r * 299 + g * 587 + b * 114) / 1000;

export const getTextColor = (color: RgbaColor) => {
  return getBrightness(color) > 128 || color.a < 0.5 ? '#000' : '#FFF';
};

export const getColorString = (color: RgbaColor) => {
  const { r, g, b, a } = color;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
