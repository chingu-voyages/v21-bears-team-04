const white = '#FFFFFF';
const black = '#000000';
const smoothBlack = '#0f0f0f';
const smoothWhite = '#fafafa';
const lightGrey = '#d5d5d5';
const grey = '#c7c7c7';
const xlightOrange = '#F5EBE0';
const lightOrange = '#ffd799';
const orange = '#e8a66a';
const darkOrange = '#b3773e';

export default {
  common: {
    white,
    black,
  },
  grey: {
    lightGrey: lightGrey,
    main: grey,
  },
  primary: {
    contrastText: smoothBlack,
    dark: grey,
    main: smoothWhite,
    light: white,
  },
  secondary: {
    contrastText: smoothWhite,
    light: lightOrange,
    main: orange,
    dark: darkOrange,
  },
  text: {
    primary: smoothBlack,
    secondary: orange,
  },
  background: {
    default: xlightOrange,
    paper: white,
  },
  action: {
    disabled: smoothWhite,
    disabledBackground: grey,
  },
  icon: orange,
};
