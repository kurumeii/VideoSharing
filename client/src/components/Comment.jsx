import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 3rem 0;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
const Said = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Username = styled.p``
const Time = styled.span``
const Detail = styled.div``

function Comment() {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu9KDVUSwXG0ffKJj7abAHfm4MPZkyQp6aeI7_hUJg=s88-c-k-c0x00ffffff-no-rj'></Avatar>
      <Said>
        <Username>
          Username <Time>1 days ago</Time>
        </Username>

        <Detail>mamamamczxkcx</Detail>
      </Said>
    </Container>
  )
}

export default Comment
