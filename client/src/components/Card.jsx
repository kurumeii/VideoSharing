import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-self: center;
  align-self: center;
`

const ImageCard = styled.img`
  width: 100%;
  height: 12rem;
  background-color: #a3a3a3;
`

const DetailCard = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`

const ChannelImg = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background-color: #a3a3a3;
`

const Texts = styled.div`
  font-size: 13px;
`
const Info = styled.div``

const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 10px 0;
`

function Card() {
  return (
    <Container>
      <Link
        to='/video/robobitch'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ImageCard />
        <DetailCard>
          <ChannelImg />
          <Texts>
            <Title>Test video</Title>
            <ChannelName>Foobar</ChannelName>
            <Info>1m views - 1 days ago</Info>
          </Texts>
        </DetailCard>
      </Link>
    </Container>
  )
}

export default Card
