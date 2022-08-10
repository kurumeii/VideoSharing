import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card.jsx'
import { media } from '../utils/MediaQueries.js'
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  gap: 2.3rem;
  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
  `}
`

function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Home
