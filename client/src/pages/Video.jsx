import {
  PlaylistAdd,
  Share,
  ThumbDownAltRounded,
  ThumbDownOffAltRounded,
  ThumbUpAltOutlined,
  ThumbUpAltRounded,
} from '@mui/icons-material'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import CommentSection from '../components/CommentSection.jsx'
import ProfileSummary from '../components/ProfileSummary.jsx'

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
const VideoWrapper = styled.div`
  padding-bottom: 10px;
`
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

const Hr = styled.hr`
  margin: 1.2rem 0;
  border: 1px solid ${({ theme }) => theme.lineBreak};
`

const initialValue = {
  numberOfLike: 1,
  numberOfDislike: 0,
}

function Video() {
  const [videoLikeStatus, setVideoLikeStatus] = useState(() => {
    return {
      isLiked: localStorage.getItem('videoLikeStatus') === 'liked',
      isDisliked: localStorage.getItem('videoLikeStatus') === 'disliked',
      numberOfLike: initialValue.numberOfLike,
      numberOfDislike: initialValue.numberOfDislike,
    }
  })

  const videoHeight = useMemo(() => (window.innerHeight * 65) / 100, [])

  const handleLikeVideo = () => {
    setVideoLikeStatus(prev => {
      return {
        ...prev,
        isLiked: !prev.isLiked,
        isDisliked: false,
        numberOfLike: !prev.isLiked
          ? prev.numberOfLike + 1
          : initialValue.numberOfLike,
      }
    })
  }

  const handleDislikeVideo = () => {
    setVideoLikeStatus(prev => {
      return {
        ...prev,
        isDisliked: !prev.isDisliked,
        isLiked: false,
        numberOfDislike: !prev.isDisliked
          ? prev.numberOfDislike === 0
            ? prev.numberOfDislike + 1
            : prev.numberOfDislike - 1
          : initialValue.numberOfDislike,
      }
    })
  }

  useEffect(() => {
    document.title = `${window.location.pathname.replace(
      '/video/',
      ''
    )} - DragonDeezTube`
  }, [])

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height={videoHeight}
            src='https://www.youtube-nocookie.com/embed/hv4cR1OIuds?autoplay=1'
            title='YouTube video player'
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <VideoTitle>Test Video</VideoTitle>
        <VideoDetail>
          <VideoInfo>View count here - Upload days</VideoInfo>
          <ButtonContainer>
            <Button
              onClick={handleLikeVideo}
              title={videoLikeStatus.isLiked ? 'Unliked it' : 'Like it'}
            >
              {videoLikeStatus.isLiked ? (
                <>
                  <ThumbUpAltRounded htmlColor='#881b7fdd' />{' '}
                  {videoLikeStatus.numberOfLike}
                </>
              ) : (
                <>
                  <ThumbUpAltOutlined /> {videoLikeStatus.numberOfLike}
                </>
              )}
            </Button>
            <Button
              onClick={handleDislikeVideo}
              title={
                videoLikeStatus.isDisliked ? 'Undislike it' : 'i dislike it'
              }
            >
              {videoLikeStatus.isDisliked ? (
                <>
                  <ThumbDownAltRounded htmlColor='#881b7fdd' />
                  {videoLikeStatus.numberOfDislike}
                </>
              ) : (
                <>
                  <ThumbDownOffAltRounded /> {videoLikeStatus.numberOfDislike}
                </>
              )}
            </Button>
            <Button>
              <Share /> Share
            </Button>
            <Button>
              <PlaylistAdd /> Save
            </Button>
          </ButtonContainer>
        </VideoDetail>
        <Hr />
        <ProfileSummary />
        <Hr />
        <CommentSection />
      </Content>
      <Recommendation></Recommendation>
    </Container>
  )
}

export default Video
