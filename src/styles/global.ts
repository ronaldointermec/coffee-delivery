import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['purple-dark']};
} */

body{
    background: ${(props) => props.theme.background}; 
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    ${fonts.textM};
      /* font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800; */
  }

  button{
    border: none;
    cursor: pointer;
  }
`