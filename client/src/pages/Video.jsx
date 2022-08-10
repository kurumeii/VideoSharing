import {
  ThumbDownAltRounded,
  ThumbDownOffAltRounded,
  ThumbUpAltOutlined,
  ThumbUpAltRounded,
} from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 1.75rem;
`
const Content = styled.div`
  grid-column: span 2;
`
const Recommendation = styled.div`
  justify-self: center;
`
const VideoWrapper = styled.div``
const VideoTitle = styled.h2`
  font-size: 17px;
`
const VideoDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 13px;
`
const VideoInfo = styled.span`
  font-weight: 300;
  font-size: 13px;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
function Video() {
  const [isLiked, setLike] = useState(null)
  const handleLikeVideo = () => {
    setLike(!isLiked)
    localStorage.setItem('videoLiked', !isLiked)
  }

  useEffect(() => {
    const savedLike = localStorage.getItem('videoLiked')
    setLike(savedLike === 'true')
  }, [])

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height={(window.innerHeight * 65) / 100}
            src='https://www.youtube.com/embed/NIevmV_OGUI'
            title='YouTube video player'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <VideoTitle>Test Video</VideoTitle>
        <VideoDetail>
          <VideoInfo>View count here - Upload days</VideoInfo>
          <ButtonContainer>
            <Button
              onClick={handleLikeVideo}
              title={isLiked ? 'Unliked it' : 'Like it'}
            >
              {isLiked ? (
                <>
                  <ThumbUpAltRounded htmlColor='#881b7fdd' /> 1.1k
                </>
              ) : (
                <>
                  <ThumbUpAltOutlined /> 1.1k
                </>
              )}
            </Button>
            <Button
              onClick={handleLikeVideo}
              title={isLiked ? 'Undislike it' : 'i dislike it'}
            >
              {!isLiked ? (
                <>
                  <ThumbDownAltRounded htmlColor='#881b7fdd' /> 2
                </>
              ) : (
                <>
                  <ThumbDownOffAltRounded /> 1
                </>
              )}
            </Button>
            <Button>Button</Button>
          </ButtonContainer>
        </VideoDetail>
      </Content>
      <Recommendation>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
        <p>Recommendation here</p>
      </Recommendation>
    </Container>
  )
}

export default Video
