import { injectGlobal } from 'styled-components';

const theme = {
  main: '#1A535C',
  secondary: '#4ecdc4',
  red: '#ff6b6b',
  redActive: '#E86262',
  yellow: '#ffe66d',
  bg: '#F7FFF7'
};

injectGlobal`
@font-face {
    font-family: 'Open Sans';
    src: url('../assets/OpenSans-Regular.ttf');
}

body {
    margin: 0;
    background-color: ${theme.bg};
}
`;

export default theme;
