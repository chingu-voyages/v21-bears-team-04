const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

export default (typography) => {
  const {
    fontFamily = defaultFontFamily,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
    variants,
  } = typography;

  const coef = fontSize / 14;
  const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`;

  return {
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants,
  };
};
