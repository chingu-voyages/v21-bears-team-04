const white = '#FFFFFF';
const black = '#000000';
const smoothBlack = '#0f0f0f';
const smoothWhite = '#fafafa';
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
  primary: {
    contrastText: smoothBlack,
    dark: grey,
    main: smoothWhite,
    light: white,
  },
  secondary: {
    contrastText: smoothBlack,
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
    paper: smoothWhite,
  },
  icon: orange,
};
