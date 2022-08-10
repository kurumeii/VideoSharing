import { AccountCircle, SearchOutlined } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  min-height: 56px;
  max-height: 56px;
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  position: relative;
  justify-content: flex-end;
`
const Search = styled.div`
  position: absolute;
  width: 30%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  &:focus-within {
    border-bottom-color: ${({ theme }) => theme.loginText};
    color: ${({ theme }) => theme.text};
  }
`
const Input = styled.input`
  border: none;
  border-color: transparent;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  &:focus-visible,
  &:focus {
    outline: none;
    outline-color: transparent;
  }
`

const LoginButton = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #8e43ae;
  color: #8e43ae;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'></Input>
          <SearchOutlined />
        </Search>
        <LoginButton>
          <AccountCircle />
          Sign in
        </LoginButton>
      </Wrapper>
    </Container>
  )
}
