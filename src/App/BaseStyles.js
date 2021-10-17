import { createGlobalStyle } from 'styled-components';

import { font } from 'shared/utils/styles';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`

