
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <h3>Hello world</h3>
        <h4>Hello world</h4>
        <h5>Hello world</h5>
        <button>Hello</button>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
