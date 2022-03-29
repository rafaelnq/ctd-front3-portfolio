import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #141414;
    color: #ffffff;
    font-family: 'Maven Pro', sans-serif;
  }
`
export {GlobalStyles}
