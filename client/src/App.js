import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import { darkTheme, lightTheme } from './utils/Theme.js'
import './App.css'
const Container = styled.div`
  display: flex;
`
const MainWrapper = styled.div`
  flex: 6;
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.text};
`
const MainContent = styled.div``
const savedDarkMode = localStorage.getItem('theme') === 'true' ? true : false
function App() {
  const [darkMode, setDarkMode] = useState(savedDarkMode)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <MainWrapper>
            <Navbar />
            <MainContent>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home />}></Route>
                  <Route path='/video'>
                    <Route path=':videoId' element={<Video />}></Route>
                  </Route>
                </Route>
              </Routes>
            </MainContent>
          </MainWrapper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
