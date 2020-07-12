/**
 * Transform factor into appropriate css like styles
 * with provided unit of spacing
 * @param {Number} spacing Unit of spacing
 * @return {String} Tranformed Css like styles
 *
 * Example: with 8 is unit of spacing
 *
 * margin: spacing(1)
 * >>> margin: '8px'
 *
 * margin: spacing(1, 2)
 * >>> margin: '8px 16px'
 *
 */

export default (spacing) => (...arg) => {
  if (!(arg.length <= 4)) {
    throw new Error('Theme:Spacing no more than 4 arguments');
  }

  const transform = (factor) => spacing * factor;

  if (arg.length === 0) return transform(1);

  if (arg.length === 1) return transform(arg[0]);

  return arg
    .map((factor) => {
      const output = transform(factor).toString();
      return ''.concat(output, 'px');
    })
    .join(' ');
};
