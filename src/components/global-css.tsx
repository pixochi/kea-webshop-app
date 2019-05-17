import { createGlobalStyle  } from 'styled-components';
import 'typeface-roboto';

import { Theme } from './styleguide/theme';

interface Props {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Roboto',sans-serif;
  }

  *:focus {
    outline: none;
  }

  body {
    background-color: ${(props: Props) => props.theme.backgroundDarker};
    color: ${props => props.theme.text};
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  #global-event {
    z-index: 9999;
  }
`;

export default GlobalStyle;
