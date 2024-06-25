import { ColorTranslator } from 'colortranslator';

function shapeColorValue(x: number): number {
  x = Math.floor(x);
  if (x > 255) {
    return 255;
  } else if (x < 0) {
    return 0;
  } else {
    return x;
  }
}

export function times(ctObject: ColorTranslator, x: number): ColorTranslator {
  const r = shapeColorValue(ctObject.R * x);
  const g = shapeColorValue(ctObject.G * x);
  const b = shapeColorValue(ctObject.B * x);
  return new ColorTranslator(`rgb(${r} ${g} ${b})`);
}

export function add(ctObject: ColorTranslator, x: number | ColorTranslator): ColorTranslator {
  const [r, g, b] = (() => {
    if (typeof x === 'number') {
      return [
        shapeColorValue(ctObject.R + x),
        shapeColorValue(ctObject.G + x),
        shapeColorValue(ctObject.B + x)
      ];
    } else {
      return [
        shapeColorValue(ctObject.R + x.R),
        shapeColorValue(ctObject.G + x.G),
        shapeColorValue(ctObject.B + x.B),
      ];
    }
  })();
  return new ColorTranslator(`rgb(${r} ${g} ${b})`);
}

export function alpha(ctObject: ColorTranslator, a: number): ColorTranslator {
  const newCtObject = new ColorTranslator(ctObject.RGB);
  newCtObject.setA(a);
  return newCtObject;
}
