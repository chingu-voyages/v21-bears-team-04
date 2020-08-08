const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Functions to return an appropriate media queries
 * @param {Object} options {values: breakpoints, unit: 'px, rem, etc', step: offset}
 * @return {String} Media queries string
 *
 * Example: values: {xs: 600}, unit: px, step: 5
 *
 * breakpoints.up('xs')
 * >>> '@ media (min-width:600px)'
 *
 */

export default (options) => {
  const { values, unit, step } = options;

  const getValues = (key) => values[key];

  // Equal or greater than breakpoint value
  const up = (key) => `@media (min-width:${values[key]}${unit})`;

  // A Step smaller from next breakpoint value
  const down = (key) => {
    const endIndex = keys.indexOf(key) + 1;

    if (endIndex === keys.length) {
      return up('xs');
    }

    const upperbound = values[keys[endIndex]];

    return `@media (max-width:${upperbound - step / 100}${unit})`;
  };

  // Equal or greater than start value and step smaller than next
  // breakpoint after end
  const between = (start, end) => {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) return up(start);

    return `@media (min-width:${values[start]}${unit}) and @media (max-width:${
      values[keys[endIndex + 1]] - step / 100
    }${unit})`;
  };

  const only = (key) => between(key, key);

  return {
    values: getValues,
    up,
    down,
    between,
    only,
  };
};
