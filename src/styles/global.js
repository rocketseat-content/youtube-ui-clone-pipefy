import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: ${ ({ theme }) => theme.background };
    color: ${ ({ theme }) => theme.secondaryText };
    -webkit-font-smoothing: antialiased !important;
    transition: all 200ms ease-in-out;
  }

  ul {
    list-style: none;
  }

  span.toggleTheme {
    position: absolute;
    top: 30px;
    right: 50px;
    color: ${ ({ theme }) => theme.primaryText };
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
`;