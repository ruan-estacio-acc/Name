import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Font import moved to index.html head for better browser compatibility */

  :root {
    --site-font: 'Inter', 'Integral CF', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    
  }

  body {
    background: #FFF;
    font-family: var(--site-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
  }
`