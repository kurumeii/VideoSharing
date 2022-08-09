import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'
import { darkTheme, lightTheme } from './utils/Theme.js'

const Container = styled.div`
  display: flex;
`
const MainWrapper = styled.div`
  flex: 6;
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.text};
`
const MainContent = styled.div``

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <MainWrapper>
          <Navbar />
          <MainContent></MainContent>
        </MainWrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
