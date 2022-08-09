import {
  AccountCircle,
  Explore,
  Flag,
  HelpOutline,
  History,
  Home,
  Settings,
  Subscriptions,
  VideoLibrary,
  WbSunny,
} from '@mui/icons-material'
import { useEffect } from 'react'
import { useCallback } from 'react'
import styled from 'styled-components'
import LogoImage from '../img/website-logo.png'

const MenuWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-y: auto;

  scrollbar-color: hsla(0, 0%, 53.3%, 0.4) rgba(0, 0, 0, 0) !important;
  scrollbar-width: thin !important;
`
const MenuBar = styled.div`
  padding: 1rem 0;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  user-select: none;
`
const Image = styled.img`
  height: 25px;
`
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
    color: #8e43ae;
  }
`
const Hr = styled.hr`
  margin: 1.2rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const LoginSection = styled.div`
  padding: 1rem;
`
const LoginButton = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #8e43ae;
  color: #8e43ae;
  border-radius: 3px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

export default function Menu(props) {
  const { setDarkMode } = props

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setDarkMode(savedTheme === 'true')
  }, [setDarkMode])

  const changeTheme = useCallback(() => {
    setDarkMode(prev => {
      localStorage.setItem('theme', !prev)
      return !prev
    })
  }, [setDarkMode])

  return (
    <MenuWrapper>
      <MenuBar>
        <Logo>
          <Image src={LogoImage} />
          DragonDeezTube
        </Logo>
        <MenuItem>
          <Home /> Homepage
        </MenuItem>
        <MenuItem>
          <Explore /> Explore
        </MenuItem>
        <MenuItem>
          <Subscriptions /> Subscription
        </MenuItem>
        <Hr />
        <LoginSection>
          Sign in to experience more features
          <LoginButton>
            <AccountCircle />
            Sign in
          </LoginButton>
        </LoginSection>
        <Hr />
        <MenuItem>
          <VideoLibrary /> Library
        </MenuItem>
        <MenuItem>
          <History /> History
        </MenuItem>
        <Hr />
        <MenuItem>
          <Settings /> Setting
        </MenuItem>
        <MenuItem>
          <Flag /> report
        </MenuItem>
        <MenuItem>
          <HelpOutline /> Help
        </MenuItem>
        <MenuItem onClick={changeTheme}>
          <WbSunny /> Light mode
        </MenuItem>
      </MenuBar>
    </MenuWrapper>
  )
}
